import React from 'react';
import { Link } from 'react-router-dom';

const PaymentService = () => {
    return (
        <div>
            <h2>Payment Service</h2>
            <p>This service handles secure payment processing.</p>
            {/* Additional payment service content can go here */}
            
            {/* Back to Frontend Link */}
            <Link to="/">Back to Frontend</Link>
        </div>
    );
};

export default PaymentService;

