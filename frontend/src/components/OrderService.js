import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderService() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_ORDER_SERVICE_URL}/orders`)
      .then(response => setOrders(response.data))
      .catch(error => console.error("Error fetching orders:", error));
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>Order ID: {order.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderService;

