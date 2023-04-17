const mongoose = require("mongoose");

const userInfoModel = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("UserInfo", userInfoModel);
