import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItemCount } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';
  // On home, transparent bg needs light text. Once scrolled or on other pages, use dark text.
  const useLightText = isHome && !isScrolled && !isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = useLightText ? 'text-white' : 'text-[var(--color-amode-black)]';
  const linkColorClass = useLightText ? 'text-white hover:text-gray-200' : 'text-[var(--color-amode-charcoal)] hover:text-[var(--color-amode-gold)]';

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[var(--color-amode-ivory)]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${textColorClass} focus:outline-none transition-colors duration-300`}
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
            {['Home', 'Shop', 'About', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              
              return (
                <Link
                  key={item}
                  to={path}
                  className={`relative font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${linkColorClass}`}
                >
                  {item}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-current"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Logo */}
          <div className="text-center absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            <Link to="/" className={`font-serif text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${textColorClass}`}>
              Amode
            </Link>
          </div>

          {/* Right Nav (Icons) */}
          <div className="flex space-x-4 items-center">
            <Link to="/cart" className={`relative transition-colors duration-300 ${linkColorClass}`}>
              <span className="sr-only">Cart</span>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </motion.div>
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 bg-[var(--color-amode-gold)] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-[var(--color-amode-cream)] flex flex-col space-y-4 pb-4 bg-[var(--color-amode-ivory)] px-4 rounded-b-lg">
                {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-sm uppercase tracking-widest text-[var(--color-amode-charcoal)] text-center py-2"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};

export default Navbar;
