const jwt = require("jsonwebtoken");
const { secret, expiresIn } = require("../config/jwt");

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, secret, { expiresIn });
};

module.exports = { generateToken };
