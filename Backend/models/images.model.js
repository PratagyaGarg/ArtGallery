const mongoose = require("mongoose");

const artSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tags: [String],
  imageUrl: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Art", artSchema);
