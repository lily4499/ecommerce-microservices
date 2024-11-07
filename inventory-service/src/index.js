const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8084;

app.use(express.json());

// Root route for the browser
app.get('/', (req, res) => {
  res.send("
           <h1 style="color: blue; font-size: 4em; text-align: center;">Welcome to the Inventory Service!</h1>
    <p style="font-size: 1.2em; text-align: center; padding: 20px;">
        The Inventory Service is a key component of our e-commerce microservices architecture. This service is responsible 
        for managing and keeping track of product stock levels, ensuring that all products are available for purchase and 
        accurately reflected in the system. 
    </p>
    <p style="font-size: 1.2em; text-align: center; padding: 20px;">
        Our Inventory Service supports real-time updates and integration with the Order Service to automatically adjust 
        inventory levels based on customer orders. This service also interacts with the Product Service to provide stock 
        information to users browsing products.
    </p>
    <p style="font-size: 1.2em; text-align: center; padding: 20px;">
        Whether you’re managing new product listings or monitoring stock, the Inventory Service is here to ensure seamless 
        inventory control for a smooth shopping experience. Stay updated on inventory levels, manage stock adjustments, 
        and support the overall health of your e-commerce platform.
    </p>
    ");
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

