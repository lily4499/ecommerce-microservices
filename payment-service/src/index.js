const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8083;

app.use(express.json());

// Root route for the browser
app.get('/', (req, res) => {
  res.send("
    <h1 style="color: green; font-size: 2.5em; text-align: center; padding-top: 20px;">
        Welcome to the Payment Service!
    </h1>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        The Payment Service is a crucial part of our e-commerce platform, handling all payment transactions 
        to ensure that your purchases are processed securely and smoothly. This service is responsible for 
        managing the entire payment workflow, from initial payment authorization to final confirmation.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Our Payment Service integrates with various payment gateways to offer flexibility and security 
        to our customers. Whether you're using a credit card, debit card, or other payment methods, 
        this service processes each transaction with the highest standards of security, protecting your 
        information at every step.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Additionally, the Payment Service provides real-time updates and works closely with the Order Service 
        to confirm successful payments, allowing customers to receive instant order confirmation. The service 
        also supports refund processing, ensuring a smooth experience for returns and exchanges.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Thank you for choosing our platform! The Payment Service is here to provide a secure, efficient, 
        and seamless checkout experience, ensuring your transactions are as safe and convenient as possible.
    </p>

    ");
});

// Define payment routes
app.post('/payment', (req, res) => {
  res.send("Process payment");
});

// Start server
app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});
