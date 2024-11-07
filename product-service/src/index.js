const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8081;

dotenv.config();



app.use(express.json());

// Define product routes
app.get('/products', (req, res) => {
  res.send("Get all products");
});

app.post('/products', (req, res) => {
  res.send("Create a new product");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Product Service running on port ${process.env.PORT}`);
});

