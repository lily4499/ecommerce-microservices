const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8081;

app.use(express.json());

// Root route for the browser
app.get('/', (req, res) => {
  res.send("Welcome to the Product Service!");
});

// Define product routes
app.get('/products', (req, res) => {
  res.send("Get all products");
});

app.post('/products', (req, res) => {
  res.send("Create a new product");
});

// Start server
app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});


