const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8081;

app.use(express.json());

// Root route for the browser
app.get('/', (req, res) => {
  res.send("
 <h1 style="color: darkorange; font-size: 2.5em; text-align: center; padding-top: 20px;">
        Welcome to the Product Service!
    </h1>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        The Product Service is at the heart of our e-commerce platform, responsible for managing all product 
        listings, categories, and details. This service ensures that customers have access to accurate and 
        up-to-date information about the products available in our store.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Our Product Service API allows seamless addition, updating, and deletion of products, enabling 
        store administrators to maintain a dynamic product catalog. Each product entry is meticulously organized 
        with relevant details like product descriptions, pricing, stock availability, and category classification, 
        making it easier for customers to find exactly what they need.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        In addition, the Product Service API integrates smoothly with the Inventory Service to track stock levels 
        in real-time and with the User Service to enhance personalized recommendations based on browsing and 
        purchasing history. This synergy helps create a tailored and efficient shopping experience for each customer.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        The Product Service is also built to scale, handling thousands of products and allowing quick retrieval 
        and search functionality. From adding new arrivals to updating current listings, this service provides 
        a robust solution for managing all aspects of the product catalog.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Thank you for visiting the Product Service! Explore our catalog, discover new products, and enjoy 
        a smooth, well-organized shopping experience tailored just for you. If you need further assistance, 
        our support team is always here to help.
    </p>
    ");
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


