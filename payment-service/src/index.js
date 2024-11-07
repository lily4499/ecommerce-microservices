const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8083;

// CORS configuration
const corsOptions = {
    origin: 'http://frontend-lili2024-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com', // Replace with your actual frontend URL
    methods: ['POST', 'GET'], // Allow specific methods, add GET if needed
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
    <h1 style="color: green; font-size: 4em; text-align: center; padding-top: 20px;">
      Welcome to the Payment Service!
    </h1>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      This service handles secure payment transactions, ensuring smooth purchases and real-time updates.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      Our platform supports various payment methods, with robust security and instant order confirmation.
    </p>
  `);
});

// Define payment routes
app.post('/payment', (req, res) => {
    const paymentData = req.body;

    // Logic to process payment (e.g., via a payment gateway)
    res.status(200).json({ message: "Payment processed successfully", data: paymentData });
});

// Start server
app.listen(PORT, () => {
    console.log(`Payment Service running on port ${PORT}`);
});
