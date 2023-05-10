const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("User", userModel);
