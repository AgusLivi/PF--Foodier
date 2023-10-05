import React, { useEffect, useState } from 'react';

function ItemCart({ item, removeFromCart, setPrices, prices }) {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  useEffect(() => {
    // Copia el estado actual de prices
    const updatedPrices = { ...prices };

    // Actualiza el valor para item.id
    updatedPrices[item.id] = quantity * item.price;

    // Usa la función setPrices para actualizar el estado
    setPrices(updatedPrices);
  }, [quantity, item.price, item.id, setPrices]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <h3>{item.price.toFixed(2)}</h3>
      <h3>
        Cantidad:
        <button onClick={decreaseQuantity}>-</button>
        {quantity}
        <button onClick={increaseQuantity}>+</button>
      </h3>
      <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </div>
  );
}

export default ItemCart;
