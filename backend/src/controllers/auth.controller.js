const {
  registerUser,
  loginUser
} = require("../services/auth.service");

const { generateToken } = require('../services/token.service')

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await registerUser(name, email, password);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error in register function", error);
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    const token = generateToken(user);
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
