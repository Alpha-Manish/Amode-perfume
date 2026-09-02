import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize from localStorage if available
    const savedCart = localStorage.getItem('amode_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('amode_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const newItems = [...prevItems];
        const newQuantity = newItems[existingItemIndex].quantity + quantity;
        
        // Ensure we don't exceed stock
        if (newQuantity <= product.stock) {
          newItems[existingItemIndex].quantity = newQuantity;
        } else {
          newItems[existingItemIndex].quantity = product.stock;
        }
        return newItems;
      } else {
        // New item
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.product.id === productId) {
          // Ensure within limits
          const boundedQuantity = Math.max(1, Math.min(newQuantity, item.product.stock));
          return { ...item, quantity: boundedQuantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }, [cartItems]);

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartItemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
