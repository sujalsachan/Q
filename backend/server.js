const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const bfhlRoutes = require("./src/routes/bfhl");

dotenv.config();

// Enable CORS and JSON parsing
app.use(cors({ 
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL || '*'
    : 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.status(200).json({ status: "Server is running" });
});

// Use API routes
app.use("/bfhl", bfhlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));