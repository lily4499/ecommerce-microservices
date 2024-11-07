const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8083;

app.use(express.json());

// Root route for the browser
app.get('/', (req, res) => {
  res.send("Welcome to the Payment Service!");
});

// Define payment routes
app.post('/payment', (req, res) => {
  res.send("Process payment");
});

// Start server
app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});
