const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  passwordHash: {
    type: String,
    require: true,
  },
  usertype: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  firstname: String,
  lastname: String,
  hobbies: String,
  city: String,
  country: String,
  bio: String,
});

module.exports = mongoose.model("User", userSchema);
