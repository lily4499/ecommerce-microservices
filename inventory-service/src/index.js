const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8084;

// CORS configuration
const corsOptions = {
    origin: 'http://frontend-lili2024-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com', // Replace with your actual frontend URL
    methods: ['GET', 'POST'], // Allow specific methods
    credentials: true, // Allow credentials if needed
};

// Use middleware
app.use(cors(corsOptions)); // Enable CORS
app.use(express.json());

// Root route for the browser
app.get('/', (req, res) => {
    res.send(`
    <h1 style="color: red; font-size: 4em; text-align: center;">Welcome to the Inventory Service!</h1>
    <p style="font-size: 1.2em; text-align: center; padding: 20px;">
        The Inventory Service manages product stock levels to ensure accurate availability in our e-commerce platform.
    </p>
  `);
});

// Define inventory routes
app.get('/inventory', (req, res) => {
    const inventoryData = [
        { productName: 'Product A', quantity: 50 },
        { productName: 'Product B', quantity: 30 },
    ];
    res.json(inventoryData); // Respond with JSON
});

app.post('/inventory', (req, res) => {
    const newInventoryItem = req.body; // Assuming { productName, quantity } is in the request body
    // Logic to add/update inventory item in the database
    res.status(201).json({ message: 'Inventory updated successfully', item: newInventoryItem });
});

// Start server
app.listen(PORT, () => {
    console.log(`Inventory Service running on port ${PORT}`);
});
