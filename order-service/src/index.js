const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8082;

app.use(express.json());

// Root route for the browser
app.get('/', (req, res) => {
  res.send("Welcome to the Order Service!");
});

// Define order routes
app.get('/orders', (req, res) => {
  res.send("Get all orders");
});

app.post('/orders', (req, res) => {
  res.send("Create a new order");
});

// Start server
app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
