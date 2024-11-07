const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8087;

dotenv.config();



app.use(express.json());

// Define routes
app.get('/users', (req, res) => {
  res.send("Get all users");
});

app.post('/users', (req, res) => {
  res.send("Create new user");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`User Service running on port ${process.env.PORT}`);
});

