import React, { useEffect, useState } from 'react';
import ItemCart from './ItemCart';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]); // estado local para los items
  const [prices, setPrices] = useState({}); // estado local para el total

  // cargamos items desde el local storage al cargar el componente
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  // guardar items en el local storage cuando cambian
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  function sumObjectValues(obj) {
    let total = 0;
    for (let key in obj) {
      total += obj[key];
    }
    return total;
  }
  
  const removeFromCart = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    // actualizamos el total
    const updatedTotal = updatedItems.reduce((acc, item) => {
      return acc + (item.price * (item.quantity || 1));
    }, 0);
    setTotal(updatedTotal);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <ItemCart item={item} removeFromCart={removeFromCart} setPrices={setPrices} prices={prices} />
          </li>
        ))}
      </ul>
      <h3>{cartItems ? sumObjectValues(prices).toFixed(2) : '0'}</h3>
    </div>
  );
}

export default ShoppingCart;