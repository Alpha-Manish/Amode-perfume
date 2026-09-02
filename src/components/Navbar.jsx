import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--color-amode-ivory)] shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--color-amode-black)] focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Left Nav */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-amode-charcoal)] hover:text-[var(--color-amode-gold)] transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="text-center">
            <Link to="/" className="font-serif text-3xl font-bold tracking-widest text-[var(--color-amode-black)] uppercase">
              Amode
            </Link>
          </div>

          {/* Right Nav (Icons) */}
          <div className="flex space-x-4 items-center">
            <Link to="/cart" className="relative text-[var(--color-amode-charcoal)] hover:text-[var(--color-amode-gold)] transition-colors">
              <span className="sr-only">Cart</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--color-amode-gold)] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[var(--color-amode-cream)]">
            <div className="flex flex-col space-y-4 pb-4">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-sm uppercase tracking-widest text-[var(--color-amode-charcoal)] text-center"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
