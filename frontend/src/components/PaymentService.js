// frontend/src/components/PaymentService.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentService = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_PAYMENT_SERVICE_URL}payments`);
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPayments();
    }, []);

    if (loading) return <div>Loading...</div>;

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

