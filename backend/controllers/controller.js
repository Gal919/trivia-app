const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

//register controller
const insertUser = async (req, res) => {
  const { name, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const currentUser = await User.findOne({ email });

    if (currentUser) {
      return res.status(400).json({ error: "User already exist" });
    }

    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    const token = generateToken(user);

    res.send({ status: "ok", token: token });
  } catch (error) {
    res.send({ error: "Some error has occurred" });
  }
};

//login controller
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "User Not Found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = generateToken(user);

    if (res.status(201)) {
      return res.json({ status: "ok", token: token });
    } else {
      return res.status(400).json({ error: "error" });
    }
  }

  return res.status(401).json({
    status: "error",
    error: "Please provide valid password",
  });
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
