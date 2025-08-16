// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4500;

app.use(cors());

// In-memory counter (resets if server restarts)
let counter = 0;

// Fetch message + counter
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the MERN backend! 🚀", counter });
});

// Increment counter
app.post("/api/increment", (req, res) => {
  counter++;
  res.json({ counter });
});

// Decrement counter
app.post("/api/decrement", (req, res) => {
  counter--;
  res.json({ counter });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
