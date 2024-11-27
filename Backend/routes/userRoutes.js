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
Router.post('/signin',
  body('username').trim().isLength({ min: 6 }),
  body('password').trim().isLength({ min: 6 }),
  async (req, res) => {
    const { username, password } = req.body;
    console.log(username + " "+ password);
    
    try {
      // Check if user exists
      const user = await userModel.findOne({ username });
      
      if (!user) {
        return res.status(400).send('Username and password are incorrect');
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send("Username or password is incorrect");

      // Generate JWT token
      const token = jwt.sign({
        userId: user._id,
        username
      }, "driveSecret");

      // Set the token in cookies
      res.cookie('token', token);
      res.send('Logged in');
    } catch (err) {
      return res.status(500).json({
        message: "An error occurred during login.",
        error: err.message
      });
    }
  }
);

module.exports = Router;
