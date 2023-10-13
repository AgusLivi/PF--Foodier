import React, { createContext, useContext, useState, useCallback } from 'react';

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  console.log(cartCounter)

  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCounter((prevCounter) => prevCounter + 1);
  }, []);

  const removeCounter = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCounter((prevCounter) => prevCounter - 1)
  }, []);

  return (
    <CartContext.Provider value={{ cart, cartCounter, addToCart, removeCounter }}>
      {children}
    </CartContext.Provider>
  );
}


