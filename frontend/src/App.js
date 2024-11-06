import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserService from './components/UserService';
import ProductService from './components/ProductService';
import OrderService from './components/OrderService';
import PaymentService from './components/PaymentService';
import InventoryService from './components/InventoryService';
import NotificationService from './components/NotificationService';

function App() {
  return (
    <Router>
      <div>
        <h1>E-commerce Microservices Frontend</h1>
        <nav>
          <ul>
            <li><Link to="/users">User Service</Link></li>
            <li><Link to="/products">Product Service</Link></li>
            <li><Link to="/orders">Order Service</Link></li>
            <li><Link to="/payment">Payment Service</Link></li>
            <li><Link to="/inventory">Inventory Service</Link></li>
            <li><Link to="/notification">Notification Service</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/users" element={<UserService />} />
          <Route path="/products" element={<ProductService />} />
          <Route path="/orders" element={<OrderService />} />
          <Route path="/payment" element={<PaymentService />} />
          <Route path="/inventory" element={<InventoryService />} />
          <Route path="/notification" element={<NotificationService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

