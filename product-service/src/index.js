const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

// Root route for the browser
app.get('/', (req, res) => {
  res.send(`
    <h1 style="color: darkorange; font-size: 4em; text-align: center; padding-top: 20px;">
      Welcome to the Product Service!
    </h1>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      This service manages product listings, categories, and details, providing accurate info for a seamless shopping experience.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      Explore our catalog and find products easily. Thank you for using the Product Service!
    </p>
  `);
});

// Define product routes
app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: "Product A", price: 10.99 },
    { id: 2, name: "Product B", price: 19.99 },
  ];
  res.status(200).json(products);
});

app.post('/products', (req, res) => {
  const newProduct = req.body;
  res.status(201).json({ message: "Product created successfully", product: newProduct });
});

// Start server
app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
