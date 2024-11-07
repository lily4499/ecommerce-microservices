const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8082;

// CORS configuration
const corsOptions = {
    origin: 'http://frontend-lili2024-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com', // Replace with your actual frontend URL
    methods: ['GET', 'POST'], // Allow specific methods
    credentials: true, // Allow credentials if needed
};

// Use middleware
app.use(cors(corsOptions)); // Enable CORS
app.use(express.json());
// app.use(helmet()); // Uncomment if you want to use helmet for security
// app.use(morgan('combined')); // Uncomment if you want to log requests

// Root route for the browser
app.get('/', (req, res) => {
    res.send(`
    <h1 style="color: purple; font-size: 4em; text-align: center; padding-top: 20px;">
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
