import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, name, price, description, slug }) => {
  return (
    <Link to={`/product/${slug}`} className="group flex flex-col cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-amode-cream)] mb-6">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--color-amode-charcoal)] font-sans text-sm tracking-widest uppercase">
            Image Placeholder
          </div>
        )}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button className="bg-[var(--color-amode-ivory)] text-[var(--color-amode-black)] px-6 py-2 text-xs tracking-widest uppercase font-medium hover:bg-[var(--color-amode-black)] hover:text-[var(--color-amode-ivory)] transition-colors duration-300">
            Quick View
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center text-center px-4">
        <h3 className="font-serif text-lg text-[var(--color-amode-black)] mb-2">{name}</h3>
        {description && <p className="text-sm text-gray-500 font-sans mb-3">{description}</p>}
        <span className="font-sans font-medium text-sm text-[var(--color-amode-charcoal)]">${price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
