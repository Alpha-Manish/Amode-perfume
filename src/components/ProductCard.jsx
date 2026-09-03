import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

const ProductCard = ({ image, name, price, description, slug }) => {
  return (
    <motion.div variants={fadeInUp} className="group flex flex-col cursor-pointer">
      <Link to={`/product/${slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-amode-cream)] mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--color-amode-charcoal)] font-sans text-sm tracking-widest uppercase">
              Image Placeholder
            </div>
          )}
          {/* Elegant Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                // We would normally dispatch an Add to Cart action here
              }}
              className="w-full bg-[var(--color-amode-ivory)] text-[var(--color-amode-black)] px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[var(--color-amode-gold)] hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
            >
              Quick Add
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <h3 className="font-serif text-lg text-[var(--color-amode-black)] mb-2 group-hover:text-[var(--color-amode-gold)] transition-colors duration-300">{name}</h3>
          {description && <p className="text-sm text-gray-500 font-sans mb-3 line-clamp-1">{description}</p>}
          <span className="font-sans font-medium text-sm text-[var(--color-amode-charcoal)]">${price}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
