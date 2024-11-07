const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8082;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

// Root route for the browser
app.get('/', (req, res) => {
  res.send(`
    <h1 style="color: teal; font-size: 2.5em; text-align: center; padding-top: 20px;">
      Welcome to the Order Service!
    </h1>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      This service manages customer orders, from adding items to tracking. It provides real-time order updates and collaborates with Payment and Inventory services.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      Track your order status, view history, and experience smooth order processing. Thank you for choosing our platform!
    </p>
  `);
});

// Define order routes
app.get('/orders', (req, res) => {
  res.status(200).json({ message: "Retrieve all orders" });
});

app.post('/orders', (req, res) => {
  const orderData = req.body;
  // Logic to process new order
  res.status(201).json({ message: "Order created successfully", order: orderData });
});

// Start server
app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
