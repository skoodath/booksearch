const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/users");
const usersRouter = require("express").Router();

const getUsers = async (request, response) => {
  const user = await User.find({});
  response.json(user);
};

usersRouter.get("/", getUsers);

const addNewUser = async (request, response) => {
  const { username, password, usertype, email } = request.body;

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    response.status(400).json({
      error: "username already exist. Please select a different username",
    });
  } else {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      passwordHash,
      usertype,
      email,
    });

    const savedUser = await user.save();

    const userToken = {
      username: savedUser.username,
      id: savedUser._id,
    };

    const token = jwt.sign(userToken, process.env.SECRET, { expiresIn: 600 });

    response.status(201).json({ token });
  }
};

usersRouter.post("/", addNewUser);

const updateUserProfile = async (request, response) => {
  const id = request.params.id;

  const { authorization } = request.header;

  const { username, firstname, lastname, hobbies, city, country } =
    request.body;

  if (!authorization) {
    return response
      .status(401)
      .json({ message: "No authorization header found" });
  }
  const token = authorization.split(" ")[1];

  const verifiedToken = jwt.verify(
    token,
    process.env.SECRET,
    (error, decoded) => {
      if (error)
        return response
          .status(401)
          .json({ message: "failed validation of token" });
      const userId = decoded.id;
      if (id !== userId)
        return response.status(403).json({ message: "token is not valid" });

      const updatedUser = User.findOneAndUpdate();
    }
  );

  if (verifiedToken) {
    const user = await User.findOneAndUpdate({
      username: request.body.username,
    });
  }

  response.status(204).send();
};

usersRouter.put("/:id", updateUserProfile);

const deleteUser = async (request, response) => {
  const id = request.params.id;

  await User.findByIdAndRemove(id);

  response.status(204).send();
};

usersRouter.delete("/:id", deleteUser);

module.exports = usersRouter;
