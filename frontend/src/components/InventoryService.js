// frontend/src/components/InventoryService.js
import React, { useEffect, useState } from 'react';

const InventoryService = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_INVENTORY_SERVICE_URL}inventory`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setInventory(data);
            } catch (error) {
                console.error('Error fetching inventory:', error);
            }
        };

        fetchInventory();
    }, []);

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

