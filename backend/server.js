const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const bfhlRoutes = require("./src/routes/bfhl");

dotenv.config();

// Enable CORS and JSON parsing
app.use(cors({ origin: "*" }));
app.use(express.json());

// Use API routes
app.use("/bfhl", bfhlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
