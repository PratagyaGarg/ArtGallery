const express = require('express');
const Router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

// Sign Up Route (already provided)
Router.post('/signup',
  body('username').trim().isLength({ min: 6 }),
  body('password').trim().isLength({ min: 6 }),
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors,
        message: "Username and Password are incorrect."
      });
    }

    const { username, password } = req.body;
    console.log(username + " password: "+ password);
    
    try {
      // Hash the password
      let hashedPassword = await bcrypt.hash(password, 10);
      
      // Create new user
      const newUser = await userModel.create({
        username,
        password: hashedPassword
      });

      // Send success response
      return res.status(201).json({
        message: "User created successfully!",
        user: {
          username: newUser.username,
          id: newUser._id,
        }
      });
    } catch (err) {
      return res.status(500).json({
        message: "An error occurred while creating the user.",
        error: err.message
      });
    }
  }
);

// Sign In Route
Router.post(
  "/signin",
  body("username").trim().isLength({ min: 6 }),
  body("password").trim().isLength({ min: 6 }),
  async (req, res) => {
    const { username, password } = req.body;

    // Validate Input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid input provided.",
      });
    }
    console.log(username + " "+ password);

    try {
      // Find user by username
      const user = await userModel.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: "Invalid username or password." });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid username or password." });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.JWT_SECRET || "defaultSecret",
        { expiresIn: "1h" }
      );

      // Send token and user info
      res.status(200).json({
        message: "Logged in successfully",
        token,
        user: {
          id: user._id,
          username: user.username,
        },
      });
    } catch (err) {
      return res.status(500).json({
        message: "An error occurred during login.",
        error: err.message,
      });
    }
  }
);

module.exports = Router;




