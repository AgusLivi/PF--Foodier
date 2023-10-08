import React, { useEffect, useState } from 'react';
import styles from './ItemCart.module.css'; // Importa el archivo CSS Module aquí

function ItemCart({ item, removeFromCart, prices, setPrices }) {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  useEffect(() => {
    // Actualiza el precio en el componente ShoppingCart cada vez que cambia la cantidad
    setPrices((prevPrices) => {
      const updatedPrices = { ...prevPrices };
      updatedPrices[item.product_ID] = item.price * quantity;
      return updatedPrices;
    });
    console.log(item);
  }, [quantity, item.product_ID, item.price, setPrices]);

  const increaseQuantity = () => {
    if (quantity < item.amount) setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const removeHandler = () => {
    removeFromCart(item.product_ID, item.price);
  };

  return (
    <div>
      <button className={styles.button} onClick={removeHandler}>
        x
      </button>
      <h3>{item.name}</h3>
      <h3>{item.price.toFixed(2)}</h3>
      <h3>
        Cantidad:
        <button className={styles.button} onClick={decreaseQuantity}>
          -
        </button>
        {quantity}
        <button className={styles.button} onClick={increaseQuantity}>
          +
        </button>
      </h3>
    </div>
  );
}

export default ItemCart;
