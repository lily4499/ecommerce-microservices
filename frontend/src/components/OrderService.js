// src/components/OrderService.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

function OrderService() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${config.ORDER_SERVICE_URL}/orders`)
      .then(response => setOrders(response.data))
      .catch(error => {
        console.error("Error fetching orders:", error);
        setError("Failed to load orders.");
      });
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>Order ID: {order.id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderService;


