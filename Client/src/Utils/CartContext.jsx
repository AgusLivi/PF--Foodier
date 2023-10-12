import React, { createContext, useContext, useState, useCallback } from 'react';

export const CartContext = createContext(); // Asegúrate de exportar el contexto con el nombre CartContext

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <CartContext.Provider value={{ cart, cartCounter, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}


