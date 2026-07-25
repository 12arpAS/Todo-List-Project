// mongodb.js
const mongoose = require("mongoose");

// 1️ Connection
const MONGO_URI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/todoDB?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
};

// 2️ Schema
const todoSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, trim: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// 3️ Model
const Todo = mongoose.model("Todo", todoSchema);

// 4️ Export both
module.exports = { connectDB, Todo };
