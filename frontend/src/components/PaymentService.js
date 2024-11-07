// frontend/src/components/PaymentService.js
import React, { useEffect, useState } from 'react';

const PaymentService = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_PAYMENT_SERVICE_URL}payments`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPayments(data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    return (
        <div>
            <h2>Payment Service</h2>
            <ul>
                {payments.map(payment => (
                    <li key={payment.id}>{payment.amount} - Status: {payment.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentService;


