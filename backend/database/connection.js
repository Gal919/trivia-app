const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(process.env.ATLAS_URI);
  console.log("Database Connected");
};

module.exports = connect;
