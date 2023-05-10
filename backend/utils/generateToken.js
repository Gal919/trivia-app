const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(
    {
      email: user.email,
    },
    secretKey
  );

  return token;
};

module.exports = generateToken;
