const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(
    {
      name: user.name,
      email: user.email,
      password: user.password,
    },
    secretKey
  );

  return token;
};

module.exports = generateToken;
