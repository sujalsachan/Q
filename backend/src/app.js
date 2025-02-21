const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bfhlRoutes = require("./routes/bfhl");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/bfhl", bfhlRoutes);

module.exports = app;
