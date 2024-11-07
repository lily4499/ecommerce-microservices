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
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'pink', fontSize: '5em' }}>E-commerce Microservices Blog</h1>

        <section style={{ margin: '20px', padding: '20px', textAlign: 'left' }}>
          <h1>Understanding E-commerce Microservices Architecture</h1>
          <p>
            Microservices architecture is an approach to building a single application as a suite of small services, 
            each running in its own process and communicating with lightweight mechanisms, such as HTTP or messaging. 
            This allows for independent deployment, scalability, and development of each service, making it ideal for 
            complex applications like e-commerce platforms.
          </p>
          <p>
            In this example, we have broken down our e-commerce application into several microservices:
          </p>
          <ul>
            <li><strong>User Service:</strong> Manages user information and authentication.</li>
            <li><strong>Product Service:</strong> Handles product listings, details, and categories.</li>
            <li><strong>Order Service:</strong> Processes customer orders and maintains order history.</li>
            <li><strong>Payment Service:</strong> Manages payment processing and transaction records.</li>
            <li><strong>Inventory Service:</strong> Keeps track of product inventory levels.</li>
            <li><strong>Notification Service:</strong> Sends notifications to users about order status and updates.</li>
          </ul>
        </section>

        <nav style={{ margin: '20px 0' }}>
          <h3>Explore Each Microservice</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
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

