import React, { useEffect, useState } from 'react';
import ItemCart from './ItemCart';
import styles from './ShoppingCart.module.css'; // Importar el archivo CSS

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]); // estado local para los items
  const [prices, setPrices] = useState({}); // estado local para los precios individuales

  // Cargamos items desde el local storage al cargar el componente
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    // Cargamos los precios desde el local storage o inicializamos a un objeto vacío
    const storedPrices = JSON.parse(localStorage.getItem('prices')) || {};
    setPrices(storedPrices);
  }, []);

  // Guardamos items en el local storage cuando cambian
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Guardamos precios en el local storage cuando cambian
  useEffect(() => {
    localStorage.setItem('prices', JSON.stringify(prices));
  }, [prices]);

  const removeFromCart = (itemId, itemPrice) => {
    // Copiamos los precios actuales
    const updatedPrices = { ...prices };

    // Eliminamos el precio del producto que se va a quitar
    delete updatedPrices[itemId];

    // Actualizamos los precios y el carrito
    setPrices(updatedPrices);

    // Actualizamos el carrito excluyendo el producto eliminado
    const updatedItems = cartItems.filter((item) => item.product_ID !== itemId);
    setCartItems(updatedItems);
  };

  // Calculamos el precio total sumando los precios individuales de los productos
  const total = Object.values(prices).reduce((acc, price) => acc + price, 0);

  return (
    <div className={styles.container}> {/* Agregamos la clase CSS al contenedor */}
      <div className={styles.cart}> {/* Agregamos la clase CSS al contenido del carrito */}
        <h2>Carrito de Compras</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <ItemCart item={item} removeFromCart={removeFromCart} prices={prices} setPrices={setPrices} />
            </li>
          ))}
        </ul>
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className={styles.button}>Comprar</button> {/* Agregamos la clase CSS al botón */}
      </div>
    </div>
  );
}

export default ShoppingCart;
