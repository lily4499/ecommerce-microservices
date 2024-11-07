import React from 'react';
import { Link } from 'react-router-dom';

const OrderService = () => {
    return (
        <div>
            <h2>Order Service</h2>
            <p>This service manages customer orders and tracks order history.</p>
            {/* Additional order service content can go here */}
            
            {/* Back to Frontend Link */}
            <Link to="/">Back to Frontend</Link>
        </div>
    );
};

export default OrderService;
