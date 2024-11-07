import React from 'react';
import { Link } from 'react-router-dom';

const InventoryService = () => {
    return (
        <div>
            <h2>Inventory Service</h2>
            <p>This service manages product inventory levels.</p>
            {/* Additional inventory service content can go here */}
            
            {/* Back to Frontend Link */}
            <Link to="/">Back to Frontend</Link>
        </div>
    );
};

export default InventoryService;
