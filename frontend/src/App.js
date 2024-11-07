import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserService from './components/UserService'; // Keep these components if needed
import ProductService from './components/ProductService'; // Keep these components if needed
import OrderService from './components/OrderService'; // Keep these components if needed
import PaymentService from './components/PaymentService'; // Keep these components if needed
import InventoryService from './components/InventoryService'; // Keep these components if needed
import NotificationService from './components/NotificationService'; // Keep these components if needed

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'pink', fontSize: '5em' }}>E-commerce Microservices DEMO</h1>

        {/* Top Navigation */}
        <nav style={{ marginBottom: '40px', marginTop: '20px' }}>
          <h3>Explore Each Microservice</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <li><a href="http://user-service-lili2024-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/"  rel="noopener noreferrer">User Service</a></li>
            <li><a href="http://product-service-lili2024-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/"  rel="noopener noreferrer">Product Service</a></li>
            <li><a href="http://order-service-lili2024-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/"  rel="noopener noreferrer">Order Service</a></li>
            <li><a href="http://payment-service-lili2024-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/"  rel="noopener noreferrer">Payment Service</a></li>
            <li><a href="http://inventory-service-lili2024-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/"  rel="noopener noreferrer">Inventory Service</a></li>
            <li><a href="http://notification-service-lili2024-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/"  rel="noopener noreferrer">Notification Service</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <section style={{ margin: '40px 20px', padding: '20px', textAlign: 'left' }}>
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

        {/* Main Routes - Optional if not used */}
        <div style={{ marginBottom: '40px' }}>
          <Routes>
            <Route path="/users" element={<UserService />} />
            <Route path="/products" element={<ProductService />} />
            <Route path="/orders" element={<OrderService />} />
            <Route path="/payment" element={<PaymentService />} />
            <Route path="/inventory" element={<InventoryService />} />
            <Route path="/notification" element={<NotificationService />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
