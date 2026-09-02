import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 ease-in-out cursor-pointer focus:outline-none';
  
  const variants = {
    primary: 'bg-[var(--color-amode-black)] text-[var(--color-amode-ivory)] hover:bg-[var(--color-amode-charcoal)]',
    secondary: 'bg-transparent text-[var(--color-amode-black)] border border-[var(--color-amode-black)] hover:bg-[var(--color-amode-black)] hover:text-[var(--color-amode-ivory)]',
    accent: 'bg-[var(--color-amode-gold)] text-white hover:bg-[#c5a02c]',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
