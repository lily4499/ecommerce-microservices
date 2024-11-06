const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Database connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Inventory Service DB connected"))
  .catch((err) => console.log("DB Connection Error:", err));

app.use(express.json());

// Define inventory routes
app.get('/inventory', (req, res) => {
  res.send("Get all inventory items");
});

app.post('/inventory', (req, res) => {
  res.send("Update inventory");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Inventory Service running on port ${process.env.PORT}`);
});

