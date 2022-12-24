const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// generate token
function generateToken(email) {
  const token = jwt.sign({ email }, "test", { expiresIn: "1h" });
  return token;
}

// user login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(404).json({ message: "Password is incorrect" });
    }

    const token = generateToken(email);
    res.status(200).json({ result: user, token });
  } catch (e) {
    console.log(e);
  }
};

// user registration
const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(req.body);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: "User already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(403).json({ message: "passwords do not match" });
    }

    // encrypting the password
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateToken(email);
    res.status(200).json({ result: newUser, token });
  } catch (e) {
    console.log(e);
  }
};
module.exports = { login, register };
