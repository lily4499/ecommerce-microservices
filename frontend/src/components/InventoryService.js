// frontend/src/components/InventoryService.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InventoryService = () => {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_INVENTORY_SERVICE_URL}inventory`);
                setInventory(response.data);
            } catch (error) {
                console.error('Error fetching inventory:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchInventory();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Inventory Service</h2>
            <ul>
                {inventory.map(item => (
                    <li key={item.id}>{item.productName} - Quantity: {item.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryService;
