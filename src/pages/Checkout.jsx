import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    orderNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const shippingCost = 50; // Mock shipping cost
  const finalTotal = cartTotal + (cartItems.length > 0 ? shippingCost : 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call for order placement
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      navigate('/order-confirmation', { 
        state: { orderId: 'AMODE' + Math.floor(Math.random() * 1000000) } 
      });
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <Container className="py-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-serif text-[var(--color-amode-black)] mb-6">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8 max-w-md">Looks like you haven't added any luxury fragrances to your cart yet.</p>
        <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
      </Container>
    );
  }

  const inputClass = "w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[var(--color-amode-black)] transition-colors text-sm";

  return (
    <Container className="py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-amode-black)] mb-12 text-center">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Form Section */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-serif mb-8 text-[var(--color-amode-black)] border-b pb-4">Shipping Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="text" name="fullName" placeholder="Full Name *" required value={formData.fullName} onChange={handleInputChange} className={inputClass} />
              </div>
              <div>
                <input type="tel" name="mobileNumber" placeholder="Mobile Number *" required value={formData.mobileNumber} onChange={handleInputChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleInputChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <input type="text" name="address" placeholder="Complete Address *" required value={formData.address} onChange={handleInputChange} className={inputClass} />
              </div>
              <div>
                <input type="text" name="city" placeholder="City *" required value={formData.city} onChange={handleInputChange} className={inputClass} />
              </div>
              <div>
                <input type="text" name="state" placeholder="State *" required value={formData.state} onChange={handleInputChange} className={inputClass} />
              </div>
              <div>
                <input type="text" name="pincode" placeholder="Pincode *" required value={formData.pincode} onChange={handleInputChange} className={inputClass} />
              </div>
            </div>
            
            <div className="mt-8">
              <textarea name="orderNotes" placeholder="Order Notes (Optional)" rows="3" value={formData.orderNotes} onChange={handleInputChange} className={`${inputClass} resize-none`} />
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="lg:w-1/3">
          <div className="bg-white p-8 shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-2xl font-serif mb-6 text-[var(--color-amode-black)] border-b pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-start text-sm">
                  <div className="flex-1 pr-4">
                    <p className="font-medium text-[var(--color-amode-black)]">{item.product.name}</p>
                    <p className="text-gray-500 text-xs mt-1">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">₹{(item.product.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">₹{shippingCost.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="border-t border-[var(--color-amode-black)] mt-4 pt-4 flex justify-between items-center">
              <span className="text-lg font-serif">Total</span>
              <span className="text-xl font-medium">₹{finalTotal.toLocaleString()}</span>
            </div>
            
            <Button 
              className="w-full mt-8" 
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </Button>
            <p className="text-xs text-center text-gray-500 mt-4">
              By placing this order, you agree to our Terms of Service. Payment gateway will be integrated later.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
