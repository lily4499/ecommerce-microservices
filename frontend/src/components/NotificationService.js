import React from 'react';
import axios from 'axios';

function NotificationService() {
  const sendNotification = () => {
    axios.post(`${process.env.REACT_APP_NOTIFICATION_SERVICE_URL}/notify`)
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

