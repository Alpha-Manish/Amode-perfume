import React from 'react';
import { motion } from 'framer-motion';
import { revealText } from '../animations/variants';

const SectionHeading = ({ title, subtitle, align = 'center', className = '' }) => {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  return (
    <div className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
      {subtitle && (
        <div className="overflow-hidden mb-3">
          <motion.span 
            variants={revealText}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="block text-[var(--color-amode-gold)] font-sans text-xs md:text-sm tracking-[0.2em] uppercase"
          >
            {subtitle}
          </motion.span>
        </div>
      )}
      <div className="overflow-hidden pb-2">
        <motion.h2 
          variants={revealText}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-inherit"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
};

export default SectionHeading;
