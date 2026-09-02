import React from 'react';

const SectionHeading = ({ title, subtitle, align = 'center', className = '' }) => {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  return (
    <div className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
      {subtitle && (
        <span className="block text-[var(--color-amode-gold)] font-sans text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-amode-black)]">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
