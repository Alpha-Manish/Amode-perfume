import React from 'react';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-amode-black)] text-[var(--color-amode-cream)] pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="font-serif text-3xl font-bold tracking-widest text-[var(--color-amode-ivory)] uppercase block mb-6">
              Amode
            </a>
            <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6">
              Elevating the senses through meticulously crafted fragrances. Born from nature, refined by artistry.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-[var(--color-amode-gold)] mb-6">Explore</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-300">
              <li><a href="#" className="hover:text-[var(--color-amode-ivory)] transition-colors">All Perfumes</a></li>
              <li><a href="#" className="hover:text-[var(--color-amode-ivory)] transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-[var(--color-amode-ivory)] transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-[var(--color-amode-ivory)] transition-colors">Journal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-[var(--color-amode-gold)] mb-6">Support</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-300">
              <li><a href="#" className="hover:text-[var(--color-amode-ivory)] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[var(--color-amode-ivory)] transition-colors">Shipping & Returns</a></li>
              <li><a href="/contact" className="hover:text-[var(--color-amode-ivory)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-amode-ivory)] transition-colors">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-[var(--color-amode-gold)] mb-6">Newsletter</h4>
            <p className="font-sans text-sm text-gray-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex border-b border-gray-600 pb-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent w-full font-sans text-sm text-[var(--color-amode-ivory)] focus:outline-none placeholder-gray-500"
              />
              <button type="submit" className="text-[var(--color-amode-gold)] uppercase tracking-wider text-xs font-medium hover:text-[var(--color-amode-ivory)] transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-sans text-xs text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AMODE. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Instagram', 'TikTok', 'Pinterest'].map((social) => (
              <a key={social} href="#" className="font-sans text-xs text-gray-500 hover:text-[var(--color-amode-ivory)] transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
