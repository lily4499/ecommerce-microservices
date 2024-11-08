const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8083;

dotenv.config();

app.use(express.json());

// Define payment routes
app.post('/payment', (req, res) => {
  res.send("Process payment");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Payment Service running on port ${process.env.PORT}`);
});

