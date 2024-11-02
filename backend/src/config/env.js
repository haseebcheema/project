const dotenv = require('dotenv');
dotenv.config();

const config = {
  dbURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiry: "1h",
};

module.exports = config;
