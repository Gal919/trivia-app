const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const Result = require("../models/resultModal");
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

//result controller
const insertResult = async (req, res) => {
  const { email, score } = req.body;

  try {
    const result = new Result({ email, score });
    const resultData = await result.save();
    res.json({ status: "ok", scoreData: resultData });
  } catch (error) {
    res.json({ error: "Some error has occurred" });
  }
};

module.exports = { insertUser, userLogin, insertResult };
