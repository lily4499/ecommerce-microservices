import React from 'react';
import axios from 'axios';

function PaymentService() {
  const processPayment = () => {
    axios.post(`${process.env.REACT_APP_PAYMENT_SERVICE_URL}/payment`)
      .then(response => alert("Payment processed successfully!"))
      .catch(error => console.error("Error processing payment:", error));
  };

  return (
    <div>
      <h2>Payment Service</h2>
      <button onClick={processPayment}>Process Payment</button>
    </div>
  );
}

export default PaymentService;

