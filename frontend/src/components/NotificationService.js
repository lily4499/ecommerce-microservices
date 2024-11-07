// src/components/NotificationService.js
import React from 'react';
import axios from 'axios';
import config from '../config';

function NotificationService() {
  const sendNotification = () => {
    axios.post(`${config.NOTIFICATION_SERVICE_URL}/notify`)
      .then(response => alert("Notification sent successfully!"))
      .catch(error => console.error("Error sending notification:", error));
  };

  return (
    <div>
      <h2>Notification Service</h2>
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
}

export default NotificationService;
