const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config();

// Database connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("User Service DB connected"))
  .catch((err) => console.log(err));

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

