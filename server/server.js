const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Sample Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use('/api/auth', authRoutes);


// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}/`));
