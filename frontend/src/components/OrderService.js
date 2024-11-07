// frontend/src/components/OrderService.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderService = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_ORDER_SERVICE_URL}orders`);
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) return <div>Loading...</div>;

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
