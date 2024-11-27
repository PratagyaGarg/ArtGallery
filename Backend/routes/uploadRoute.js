const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const Art = require("../models/images.model.js");
const Router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Middleware for JWT authentication
const authenticate = (req, res, next) => {
    console.log(typeof req.headers);
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "defaultSecret");
    req.userId = decoded.userId; // Attach `userId` to the request object
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token." });
  }
};

// Upload route
Router.post("/upload", authenticate, upload.single("image"), async (req, res) => {
  try {
    const { title, description, price, tags } = req.body;
    if (!req.file) return res.status(400).json({ message: "Image is required." });

    // Save art metadata to database
    const newArt = await Art.create({
      title,
      description,
      tags: tags.split(",").map((tag) => tag.trim()),
      imageUrl: `/uploads/${req.file.filename}`, // File path on the server
      userId: req.userId,
    });

    res.status(201).json({ message: "Art uploaded successfully!", art: newArt });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Backend route to get uploaded arts by user
Router.get("/upload/:userId", authenticate, async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Find all arts uploaded by the user
      const arts = await Art.find({ userId });
      console.log(arts);
  
      if (arts.length === 0) {
        return res.status(200).json({ message: "No arts uploaded yet.", arts: [] });
      }
  
      res.status(200).json({ arts });
    } catch (error) {
      res.status(500).json({ message: "Error fetching arts", error: error.message });
    }
  });
  

module.exports = Router;
