const mongoose = require("mongoose");

const resultModel = new mongoose.Schema({
  email: { type: String, unique: true },
  score: Number,
});

module.exports = mongoose.model("Result", resultModel);
