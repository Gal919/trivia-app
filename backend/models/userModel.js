const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("User", userModel);
