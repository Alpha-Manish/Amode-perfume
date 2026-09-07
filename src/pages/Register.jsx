import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAuth();
  const { addToCart } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const pendingAction = location.state;

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = register(formData.name.trim(), formData.email.trim().toLowerCase(), formData.password);
    if (!result.success) {
      setError(result.message);
      return;
    }
    if (pendingAction?.pendingProduct) {
      addToCart(pendingAction.pendingProduct, pendingAction.pendingQuantity || 1);
    }
    navigate(pendingAction?.action === 'buy' ? '/cart' : (pendingAction?.redirectTo || '/shop'), { replace: true });
  };

  return (
    <Container className="py-24 md:py-32 min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--color-amode-gold)] mb-4">Begin Your Collection</p>
          <h1 className="font-serif text-4xl text-[var(--color-amode-black)]">Create Account</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" placeholder="Full Name *" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[var(--color-amode-black)] transition-colors text-sm" />
          <input type="email" placeholder="Email Address *" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[var(--color-amode-black)] transition-colors text-sm" />
          <input type="password" minLength="6" placeholder="Password *" required value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[var(--color-amode-black)] transition-colors text-sm" />
          {error && <p className="text-sm text-red-700">{error}</p>}
          <Button type="submit" variant="accent" className="w-full">Create Account</Button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account? <Link to="/login" state={pendingAction} className="text-[var(--color-amode-gold)] hover:underline">Sign in</Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;