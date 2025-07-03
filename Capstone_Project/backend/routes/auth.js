const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// router.post("/register", async (req, res) => {
//   const hashed = await bcrypt.hash(req.body.password, 10);
//   const user = await User.create({ email: req.body.email, password: hashed });
//   res.status(201).json({ message: "User registered" });
// });

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Optional: prevent duplicate email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed });

    res.status(201).json({ message: "User registered" });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
});


router.post("/login", async (req, res) => {
  console.log("Hello!")
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not found");
  console.log(user)

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("Invalid credentials");

  const token = jwt.sign({ id: user._id }, "w4h9V7xYpL3QmZ8tR2fN6jBvXsC1KdPzF0qW8eYtUaMvJrXn", { expiresIn: "1h" });
  res.json({ token });
});

router.post("/test", async (req, res) => {
  console.log("Test")
  res.send("Testing ok!")
})

module.exports = router;
