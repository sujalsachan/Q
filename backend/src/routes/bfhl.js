const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.status(200).json({ operation_code: 1 }));

router.post("/", (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input. Expected an array." });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

    const highest_alphabet = alphabets.length ? [alphabets.sort((a, b) => b.localeCompare(a, "en", { sensitivity: "base" }))[0]] : [];

    res.status(200).json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_alphabet
    });
});

module.exports = router;
