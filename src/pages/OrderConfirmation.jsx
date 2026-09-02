import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId;

  // If accessed directly without an order
  if (!orderId) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container className="py-24 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl mx-auto bg-white p-12 shadow-sm border border-gray-100 rounded-sm">
        <div className="w-20 h-20 bg-[var(--color-amode-gold)] text-white rounded-full flex items-center justify-center mx-auto mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-serif text-[var(--color-amode-black)] mb-4">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-8">Your order has been placed successfully.</p>
        
        <div className="bg-[var(--color-amode-ivory)] p-6 mb-10 inline-block text-left rounded-sm w-full md:w-auto min-w-[300px]">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Order Reference</p>
          <p className="text-2xl font-medium text-[var(--color-amode-black)] tracking-widest">{orderId}</p>
        </div>
        
        <p className="text-gray-600 mb-10 max-w-md mx-auto">
          We've sent a confirmation email with your order details. Your luxury fragrance will be on its way soon.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
          <Button variant="secondary" onClick={() => navigate('/')}>Return to Home</Button>
        </div>
      </div>
    </Container>
  );
};

export default OrderConfirmation;
