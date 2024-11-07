const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8085;

app.use(express.json());

// Root route for the browser
app.get('/', (req, res) => {
  res.send("Welcome to the Notification Service!");
});

// Define notification route
app.post('/notify', (req, res) => {
  res.send("Send notification");
});

// Start server
app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
