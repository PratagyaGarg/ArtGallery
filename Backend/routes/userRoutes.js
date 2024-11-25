const express = require('express');
const Router = express.Router();
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcrypt');
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

Router.post('/signup',
    body('username').trim().isLength({min: 6}),
    body('password').trim().isLength({min: 6}),
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


            // Send success response with the new user's details (excluding password)
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
Router.post('/user/signin',
    body('username').trim().isLength({min:6}),
    body('password').trim().isLength({min: 6}),
    async (req,res)=>{
        const {username, password}= req.body;
        const user = await userModel.findOne({
            username
        })

        if(!user){
            return res.send('username and password is incorrect');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.send("username or password is incorrect");
        const token = jwt.sign({
            userId : user._id,
            username
        },"driveSecret");

        res.cookie('token',token);
        res.send('Logged in');
})

module.exports = Router;