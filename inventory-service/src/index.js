const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8084;

app.use(express.json());
app.use(cors()); // Enable CORS

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

