const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8082;

dotenv.config();

// Database connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Order Service DB connected"))
  .catch((err) => console.log("DB Connection Error:", err));

app.use(express.json());

// Define order routes
app.get('/orders', (req, res) => {
  res.send("Get all orders");
});

app.post('/orders', (req, res) => {
  res.send("Create a new order");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Order Service running on port ${process.env.PORT}`);
});

