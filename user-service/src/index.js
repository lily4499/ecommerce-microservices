const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8087;

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send(`
  <h1 style="color: purple; font-size: 2.5em; text-align: center; padding-top: 20px;">
        Welcome to the User Service API!
    </h1>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        The User Service API is an essential part of our e-commerce platform, dedicated to managing all aspects 
        of user information and interaction. This service provides a secure, efficient, and scalable solution 
        for handling user data, including profile creation, authentication, and account management.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Our API allows users to create and update profiles, manage their account details, and securely log 
        into their accounts. With advanced authentication and authorization protocols, the User Service API 
        ensures that all user data is protected and only accessible by authorized personnel.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Additionally, the User Service API integrates seamlessly with other services, such as the Order and 
        Notification Services, to provide a smooth user experience. For instance, once authenticated, users 
        can access their order history, receive personalized notifications, and update their preferences, 
        all from within a single platform.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Whether you are managing account settings, viewing order history, or updating personal information, 
        the User Service API is here to make the experience as seamless and secure as possible. Thank you for 
        being a valued user of our platform!
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        For more information on using the User Service API, please explore our documentation or contact support. 
        We're here to help you make the most of your user experience on our platform.
    </p>
  `);
});

app.get('/users', (req, res) => {
  res.send("Get all users");
});

app.post('/users', (req, res) => {
  res.send("Create new user");
});

// Start server
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
