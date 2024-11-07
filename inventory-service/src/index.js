const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8084;

dotenv.config();


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

