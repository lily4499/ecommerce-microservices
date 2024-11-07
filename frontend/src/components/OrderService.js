// frontend/src/components/OrderService.js
import React, { useEffect, useState } from 'react';

const OrderService = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_ORDER_SERVICE_URL}orders`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h2>Order Service</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{order.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderService;



