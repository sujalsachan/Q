// src/routes/bfhl.js
const express = require("express");
const router = express.Router();

// Health check endpoint for GET requests
router.get("/", (req, res) => res.status(200).json({ operation_code: 1 }));

// POST endpoint to process input data
router.post("/", (req, res) => {
  console.log("Backend received request");
  const { data } = req.body;

  // Validate input data
  if (!data || !Array.isArray(data)) {
    return res
      .status(400)
      .json({
        is_success: false,
        message: "Invalid input. Expected an array.",
      });
  }

  // Separate numbers and alphabets from input data
  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));

  // Find the highest alphabet
  const highest_alphabet = alphabets.length
    ? [
        alphabets.sort((a, b) =>
          b.localeCompare(a, "en", { sensitivity: "base" })
        )[0],
      ]
    : [];

  // Respond with processed data
  res.status(200).json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_alphabet,
  });
});

module.exports = router;
