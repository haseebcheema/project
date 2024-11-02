const User = require("../models/user.mongo");
const { hashPassword, comparePassword } = require("./password.service");
const { generateToken } = require("./token.service");

const registerUser = async (name, email, password) => {
  const hashedPassword = await hashPassword(password);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  return newUser;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");
  return user;
};

module.exports = {
  registerUser,
  loginUser,
};
