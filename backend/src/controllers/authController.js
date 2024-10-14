const User = require("../models/UserMongo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../models/UserPostgres");
const {
  registerUser,
  loginUser,
  generateToken,
} = require("../services/authService");

// register
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await registerUser(name, email, password);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("error thrown from register function", error);
    res.status(500).json({ error: error.message });
  }
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    const token = generateToken(user);
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    }); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
