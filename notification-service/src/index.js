const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8085;

dotenv.config();

app.use(express.json());

// Define notification route
app.post('/notify', (req, res) => {
  res.send("Send notification");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Notification Service running on port ${process.env.PORT}`);
});

