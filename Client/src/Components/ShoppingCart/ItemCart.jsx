import React, { useEffect, useState, useContext } from 'react';
import styles from './ItemCart.module.css';
import { CartContext } from '../../Utils/CartContext';

function ItemCart({ item, removeFromCart, prices, setPrices, updateCartItemQuantity }) {
  const [quantity, setQuantity] = useState(item.amount);
  const cartContext = useContext(CartContext);

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
    if (quantity < item.amount) {
      setQuantity(quantity + 1);
      updateCartItemQuantity(item.product_ID, quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateCartItemQuantity(item.product_ID, quantity - 1);
    }
  };

  const removeHandler = () => {
    removeFromCart(item.product_ID, item.price);
    cartContext.removeCounter();
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
