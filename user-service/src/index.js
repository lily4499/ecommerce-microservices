const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8087;  // Default to 8087 if PORT is not defined

app.use(express.json());

// Define routes
app.get('/users', (req, res) => {
  res.send("Get all users");
});

app.post('/users', (req, res) => {
  res.send("Create new user");
});

// Start server
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
