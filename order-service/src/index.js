const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8082;

app.use(express.json());

// Root route for the browser
app.get('/', (req, res) => {
  res.send(`
   <h1 style="color: teal; font-size: 2.5em; text-align: center; padding-top: 20px;">
        Welcome to the Order Service!
    </h1>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        The Order Service is a crucial component of our e-commerce platform, responsible for managing and processing 
        customer orders seamlessly. This service handles the entire order lifecycle, from the moment an item is added 
        to the cart to order fulfillment and tracking, ensuring that each order is processed accurately and efficiently.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Our Order Service API provides functionality for order creation, updates, and tracking, allowing customers 
        to view the status of their orders in real-time. It securely manages customer details, order items, quantities, 
        and payment information to create a smooth purchasing experience from start to finish.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        This service works closely with the Payment Service to handle transaction processing and with the Inventory Service 
        to ensure stock levels are adjusted automatically upon successful orders. By coordinating with these services, 
        the Order Service maintains a reliable, synchronized system that keeps everything running smoothly.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        The Order Service also provides tracking capabilities, allowing customers to monitor the status of their orders, 
        receive notifications about shipment progress, and access order history for their records. Whether you are a 
        customer placing an order or an administrator managing transactions, the Order Service is here to make the 
        process efficient and transparent.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Thank you for using the Order Service! We’re dedicated to delivering a hassle-free order experience and ensuring 
        that every purchase journey is smooth and reliable. If you have any questions or need assistance, our support team 
        is ready to help.
    </p>
    `);
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
