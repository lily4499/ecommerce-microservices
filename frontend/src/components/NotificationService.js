import React from 'react';
import { Link } from 'react-router-dom';

const NotificationService = () => {
    return (
        <div>
            <h2>Notification Service</h2>
            <p>This service sends notifications about order statuses and updates.</p>
            {/* Additional notification service content can go here */}
            
            {/* Back to Frontend Link */}
            <Link to="/">Back to Frontend</Link>
        </div>
    );
};

export default NotificationService;
