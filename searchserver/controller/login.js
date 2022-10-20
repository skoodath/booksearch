const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../model/users");

loginRouter.get("/", (request, response) => {
  response.send("Login");
});

const verifyLogin = async (request, response) => {
  const { username, password } = request.body;

  const user = await User.findOne({ username });
  const verifyPassword =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && verifyPassword)) {
    return response.status(401).json({
      error: "Username or password not correct",
    });
  }

  const userToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userToken, process.env.SECRET, { expiresIn: 600 });

  response.status(200).send({ token });
};

loginRouter.post("/", verifyLogin);

module.exports = loginRouter;
