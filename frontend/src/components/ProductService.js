import React from 'react';
import { Link } from 'react-router-dom';

const ProductService = () => {
    return (
        <div>
            <h2>Product Service</h2>
            <p>This service handles product listings and details.</p>
            {/* Additional product service content can go here */}
            
            {/* Back to Frontend Link */}
            <Link to="/">Back to Frontend</Link>
        </div>
    );
};

export default ProductService;
