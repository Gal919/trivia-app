const mongoose = require("mongoose");

const resultModel = new mongoose.Schema({
  email: { type: String, unique: true },
  currentScore: Number,
  highestScore: Number,
});

module.exports = mongoose.model("Result", resultModel);
