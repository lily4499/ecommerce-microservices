const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Database connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Product Service DB connected"))
  .catch((err) => console.log("DB Connection Error:", err));

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

