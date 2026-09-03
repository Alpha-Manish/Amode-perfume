import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { useCart } from '../context/CartContext';
import { staggerContainer, fadeInUp } from '../animations/variants';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal, cartItemCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="pt-40 pb-32 min-h-screen bg-[var(--color-amode-ivory)] text-center flex flex-col items-center">
        <Container>
          <div className="max-w-md mx-auto">
            <h1 className="font-serif text-4xl mb-6 text-[var(--color-amode-black)]">Your Cart is Empty</h1>
            <p className="font-sans text-gray-500 mb-10">
              Discover our collection of premium artisanal fragrances and find your signature scent.
            </p>
            <Link to="/shop">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-amode-ivory)]">
      <Container>
        <SectionHeading title="Your Cart" subtitle={`${cartItemCount} Items`} align="left" />
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Cart Items List */}
          <div className="w-full lg:w-2/3">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-[var(--color-amode-black)] mb-6 font-sans text-xs uppercase tracking-widest text-gray-400">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-8"
            >
              <AnimatePresence>
                {cartItems.map(item => (
                  <motion.div 
                    variants={fadeInUp}
                    exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
                    key={item.product.id} 
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b border-gray-200 pb-8"
                  >
                    {/* Mobile structure is different from desktop, but we handle via flex/grid */}
                  <div className="col-span-1 md:col-span-6 flex gap-6">
                    <Link to={`/product/${item.product.slug}`} className="w-24 h-32 flex-shrink-0 bg-[var(--color-amode-cream)]">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </Link>
                    <div className="flex flex-col justify-center">
                      <span className="font-sans text-[10px] uppercase tracking-widest text-[var(--color-amode-gold)] mb-1">
                        {item.product.fragranceFamily}
                      </span>
                      <Link to={`/product/${item.product.slug}`} className="font-serif text-xl text-[var(--color-amode-black)] hover:text-[var(--color-amode-gold)] transition-colors mb-1">
                        {item.product.name}
                      </Link>
                      <span className="font-sans text-sm text-gray-500 mb-3">{item.product.size}</span>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-left font-sans text-xs uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 md:text-center font-sans text-[var(--color-amode-charcoal)]">
                    <span className="md:hidden text-gray-400 uppercase text-xs tracking-widest mr-2">Price:</span>
                    ${item.product.price.toFixed(2)}
                  </div>

                  <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
                    <div className="flex items-center border border-[var(--color-amode-black)] w-28 h-10">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-10 h-full flex items-center justify-center text-[var(--color-amode-charcoal)] hover:bg-[var(--color-amode-cream)] transition-colors"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-sans text-sm text-[var(--color-amode-black)]">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= item.product.stock}
                        className="w-10 h-full flex items-center justify-center text-[var(--color-amode-charcoal)] hover:bg-[var(--color-amode-cream)] transition-colors disabled:opacity-50"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 md:text-right font-sans font-medium text-[var(--color-amode-black)]">
                    <span className="md:hidden text-gray-400 uppercase text-xs tracking-widest mr-2">Total:</span>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="mt-8 flex justify-between items-center">
              <Link to="/shop" className="font-sans text-xs uppercase tracking-widest text-[var(--color-amode-charcoal)] hover:text-[var(--color-amode-gold)] transition-colors">
                ← Continue Shopping
              </Link>
              <button 
                onClick={clearCart}
                className="font-sans text-xs uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-white p-8 border border-[var(--color-amode-cream)] shadow-sm">
              <h2 className="font-serif text-2xl mb-6 text-[var(--color-amode-black)] border-b border-[var(--color-amode-cream)] pb-4">Order Summary</h2>
              
              <div className="space-y-4 font-sans text-sm mb-6 pb-6 border-b border-[var(--color-amode-cream)]">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-[var(--color-amode-black)]">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-[var(--color-amode-black)]">Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="font-sans uppercase tracking-widest text-xs font-semibold">Total</span>
                <span className="font-serif text-3xl text-[var(--color-amode-black)]">${cartTotal.toFixed(2)}</span>
              </div>

              <Link to="/checkout" className="w-full block">
                <Button variant="primary" className="w-full">Proceed to Checkout</Button>
              </Link>
              
              <p className="font-sans text-xs text-center text-gray-400 mt-4 leading-relaxed">
                Taxes and shipping calculated at checkout. <br/> Complimentary shipping on orders over $150.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
