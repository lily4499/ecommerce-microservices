const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8087;

app.use(express.json());
//app.use(cors());
//app.use(helmet());
//app.use(morgan('combined'));

// Root route for the browser
app.get('/', (req, res) => {
  res.send(`
    <h1 style="color: gold; font-size: 4em; text-align: center; padding-top: 20px;">
      Welcome to the User Service API!
    </h1>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      This service manages user profiles, authentication, and account details for a secure e-commerce experience.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      Access order history, receive updates, and manage your account seamlessly with our integrated API.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
      Thank you for using our platform!
    </p>
  `);
});

// Define user routes
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: "User A" },
    { id: 2, name: "User B" },
  ];
  res.status(200).json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "User created successfully", user: newUser });
});

// Start server
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
