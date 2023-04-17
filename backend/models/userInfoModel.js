const mongoose = require("mongoose");

const userInfoModel = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("UserInfo", userInfoModel);
