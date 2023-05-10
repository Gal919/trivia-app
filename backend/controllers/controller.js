const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

//register controller
const insertUser = async (req, res) => {
  const { username, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const currentUser = await User.findOne({ email });

    if (currentUser) {
      return res.json({ error: "User already exist" });
    }

    const user = await User.create({
      username,
      email,
      password: encryptedPassword,
    });

    const token = generateToken(user);

    res.send({ status: "ok", token: token });
  } catch (error) {
    res.send({ status: "error" });
  }
};

//login controller
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not Found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = generateToken(user);

    if (res.status(201)) {
      return res.json({ status: "ok", token: token });
    } else {
      return res.json({ error: "error" });
    }
  }

  return res.json({ status: "error", error: "Invalid Password" });
};

//user data controller
const userData = async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const useremail = user.email;
    const userData = await User.findOne({ email: useremail });
    res.send({ status: "ok", data: userData });
  } catch (error) {
    res.send({ status: "error", data: error });
  }
};

module.exports = { insertUser, userLogin, userData };
