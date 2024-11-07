const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8083;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

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
