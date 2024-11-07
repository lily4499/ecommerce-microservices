const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8085;

app.use(express.json());

// Root route for the browser
app.get('/', (req, res) => {
  res.send("
    <h1 style="color: darkblue; font-size: 2.5em; text-align: center; padding-top: 20px;">
        Welcome to the Notification Service!
    </h1>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        The Notification Service plays a vital role in enhancing the user experience on our e-commerce platform by 
        keeping customers informed at every step of their shopping journey. This service is responsible for sending 
        timely notifications related to order status, payment confirmations, promotions, and other important updates.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Through our Notification Service, customers receive alerts about each stage of their order, from processing 
        and shipping to delivery. This ensures transparency and keeps users engaged, providing peace of mind as they 
        track their purchases. Notifications can be sent via multiple channels, including email, SMS, and push 
        notifications, to provide information in the most convenient way possible.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        The Notification Service is designed to integrate seamlessly with other services such as the Order Service, 
        Payment Service, and User Service. By working together, these services allow us to trigger notifications based 
        on specific actions, like successful payments, order dispatch, or promotional offers tailored to user preferences. 
        This integration allows us to provide a personalized and dynamic experience.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Our platform also leverages the Notification Service to inform customers of new arrivals, special deals, and 
        personalized recommendations, making it easier for them to stay updated on the latest products and offers. 
        This helps foster customer engagement and encourages repeat purchases by providing relevant information 
        directly to the user.
    </p>
    <p style="font-size: 1.3em; text-align: center; padding: 20px;">
        Thank you for visiting the Notification Service! Our goal is to keep you informed and engaged, making sure 
        that every interaction with our platform is as smooth and satisfying as possible. If you need any assistance, 
        please feel free to reach out to our support team.
    </p>

    ");
});

// Define notification route
app.post('/notify', (req, res) => {
  res.send("Send notification");
});

// Start server
app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
