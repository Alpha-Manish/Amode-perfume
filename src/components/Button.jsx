import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const Button = ({ children, variant = 'primary', className = '', to, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wider uppercase transition-colors duration-500 ease-in-out cursor-pointer focus:outline-none';
  
  const variants = {
    primary: 'bg-[var(--color-amode-black)] text-[var(--color-amode-ivory)] hover:bg-[var(--color-amode-charcoal)]',
    secondary: 'bg-transparent text-[var(--color-amode-black)] border border-[var(--color-amode-black)] hover:bg-[var(--color-amode-black)] hover:text-[var(--color-amode-ivory)]',
    accent: 'bg-[var(--color-amode-gold)] text-white hover:bg-[#c5a02c]',
  };

  if (to) {
    return (
      <MotionLink 
        to={to}
        className={`${baseStyles} ${variants[variant]} ${className}`} 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        {...props}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
