const mongoose = require("mongoose");

const resultModel = new mongoose.Schema({
  email: { type: String, unique: true },
  name: String,
  currentScore: Number,
  highestScore: Number,
});

module.exports = mongoose.model("Result", resultModel);
