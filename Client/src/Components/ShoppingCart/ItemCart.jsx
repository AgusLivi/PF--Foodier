import React, { useEffect, useState } from 'react';
import styles from './ItemCart.module.css';

function ItemCart({ item, removeFromCart, prices, setPrices, updateCartItemQuantity }) {
  const [quantity, setQuantity] = useState(item.amount > 0 ? 1 : 0);

  useEffect(() => {
    // Actualiza el precio en función de la cantidad seleccionada
    setPrices((prevPrices) => {
      const updatedPrices = { ...prevPrices };
      updatedPrices[item.product_ID] = item.price * quantity;
      return updatedPrices;
    });
  
    // Llama a la función para actualizar la cantidad en el carrito
    updateCartItemQuantity(item.product_ID, quantity);
  }, []);  


  const increaseQuantity = () => {
    if (item.quantity < item.amount) {
      const newQuantity = item.quantity + 1;
      updateCartItemQuantity(item.product_ID, newQuantity);
    }
  };
  
  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      updateCartItemQuantity(item.product_ID, newQuantity);
    }
  }

  const removeHandler = () => {
    removeFromCart(item.product_ID, item.price);
  };

  return (
    <div className={styles.cart}>
      <button className={styles.buttonClose} onClick={removeHandler}>
        x
      </button>
      <br /><br />
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <h3>${item.price.toFixed(2)}</h3>
      <h3>
        Cantidad:
        <button className={styles.button} onClick={decreaseQuantity}>
          -
        </button>
        {item.quantity}
        <button className={styles.button} onClick={increaseQuantity}>
          +
        </button>
      </h3>
    </div>
  );
}

export default ItemCart;
