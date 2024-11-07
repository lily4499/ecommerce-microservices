// frontend/src/components/NotificationService.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotificationService = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_NOTIFICATION_SERVICE_URL}notifications`);
                setNotifications(response.data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Notification Service</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationService;
