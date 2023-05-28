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

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User Not Found" });
    }

    bcrypt.compare(password, user.password, (_, isValid) => {
      if (isValid) {
        const token = generateToken(user);
        return res.json({ status: "ok", token: token });
      } else {
        return res.status(400).json({ error: "Please provide valid password" });
      }
    });
  } catch (error) {
    res.send({ error: "Some error has occurred" });
  }
};

//result controller
const insertResult = async (req, res) => {
  const { email, name, score } = req.body;

  try {
    const userResult = await Result.findOne({ email });
    const resultObj = { email, name, currentScore: score, highestScore: score };

    if (!userResult) {
      const result = new Result(resultObj);
      const resultData = await result.save();
      return res.json(resultData);
    }

    userResult.highestScore < score
      ? (resultObj.highestScore = score)
      : (resultObj.highestScore = userResult.highestScore);

    await Result.updateOne({ email }, resultObj);

    res.json(resultObj);
  } catch (error) {
    res.json({ error: "Some error has occurred" });
  }
};

const getUserResult = async (req, res) => {
  const { email } = req.query;

  try {
    const userResult = await Result.findOne({ email });

    res.json(userResult);
  } catch (error) {
    res.json({ error: "Some error has occurred" });
  }
};

//resultlist controller
const getResultList = async (req, res) => {
  try {
    const scoreList = await Result.find(
      {},
      { highestScore: 1, email: 1, name: 1 }
    );

    res.json(scoreList);
  } catch (error) {
    res.json({ error: "Some error has occurred" });
  }
};

module.exports = {
  insertUser,
  userLogin,
  insertResult,
  getUserResult,
  getResultList,
};
