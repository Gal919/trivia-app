const bcrypt = require("bcryptjs");
const User = require("../models/userInfoModel");

//register controller
const insertUser = async (req, res) => {
  const { username, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const currentUser = await User.findOne({ email });

    if (currentUser) {
      return res.json({ error: "User already exist" });
    }

    await User.create({
      username,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
};

module.exports = { insertUser };
