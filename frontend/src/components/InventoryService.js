import React from 'react';
import { Link } from 'react-router-dom';

const UserService = () => {
    return (
        <div>
            <h2>User Service</h2>
            <p>This service manages user information and authentication.</p>
            {/* Back to Frontend Link */}
            <Link to="/">Back to Frontend</Link>
        </div>
    );
};

export default UserService;
