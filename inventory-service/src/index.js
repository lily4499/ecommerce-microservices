const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8084;

app.use(express.json());

// Root route for the browser
app.get('/', (req, res) => {
  res.send("Welcome to the Inventory Service!");
});

// Define inventory routes
app.get('/inventory', (req, res) => {
  res.send("Get all inventory items");
});

app.post('/inventory', (req, res) => {
  res.send("Update inventory");
});

// Start server
app.listen(PORT, () => {
  console.log(`Inventory Service running on port ${PORT}`);
});

