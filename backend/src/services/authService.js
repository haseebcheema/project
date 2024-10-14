const User = require("../models/UserMongo");
const { createUser, findUserByEmail } = require("../models/UserPostgres");
const { hashPassword, comparePassword } = require("./passwordService");

const jwt = require("jsonwebtoken");

const registerUser = async (name, email, password) => {
  const hashedPassword = await hashPassword(password);

  // save to mongodb
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

  // save to postgres
  // const newUser = await createUser(name, email, hashedPassword);

  return newUser;
};

// Function to login a user
const loginUser = async (email, password) => {
  // mongo
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  //   const user = await findUserByEmail(email);
  //   if (!user) throw new Error("User not found");

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  return user;
};

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = {
  registerUser,
  loginUser,
  generateToken,
};
