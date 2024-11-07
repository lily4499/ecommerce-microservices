const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8085;

// CORS configuration
const corsOptions = {
    origin: 'http://frontend-lili2024-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com', // Replace with your actual frontend URL
    methods: ['POST', 'GET'], // Allow specific methods
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
    <h1 style="color: darkblue; font-size: 4em; text-align: center; padding-top: 20px;">
      Welcome to the Notification Service!
    </h1>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      This service keeps customers updated with order status, promotions, and more, enhancing the e-commerce experience.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      Notifications are sent via email, SMS, and push alerts, integrating seamlessly with other services like Orders and Payments.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      Stay informed about your orders, deals, and recommendations. Thank you for using the Notification Service!
    </p>
  `);
});

// Define notification route
app.post('/notify', (req, res) => {
    const { message, recipient } = req.body;
    if (!message || !recipient) {
        return res.status(400).json({ error: 'Message and recipient are required.' });
    }

    res.status(200).json({ message: 'Notification sent successfully', data: { message, recipient } });
});

// Start server
app.listen(PORT, () => {
    console.log(`Notification Service running on port ${PORT}`);
});
