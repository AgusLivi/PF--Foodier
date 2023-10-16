import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCart from './ItemCart';
import styles from './ShoppingCart.module.css'; 

function ShoppingCart() {
  
  const [cartItems, setCartItems] = useState([]); // estado local para los items
  const [prices, setPrices] = useState({}); // estado local para los precios individuales
  const navigate = useNavigate();

  // Cargamos items desde el local storage al cargar el componente
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    // Cargamos los precios desde el local storage o inicializamos a un objeto vacío
    const storedPrices = JSON.parse(localStorage.getItem('prices')) || {};
    setPrices(storedPrices);
  }, []);

  // Función para actualizar la cantidad en el carrito
  const updateCartItemQuantity = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.product_ID === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (itemId) => {
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

  // Guardamos items en el local storage cuando cambian
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Guardamos precios en el local storage cuando cambian
  useEffect(() => {
    localStorage.setItem('prices', JSON.stringify(prices));
  }, [prices]);

  // Calcula el precio total para cada elemento
  const cartItemPrices = cartItems.map((item) => {
    return item.price * item.quantity;
  });

  // Calcula el precio total sumando los precios individuales de los productos
  const total = cartItemPrices.reduce((acc, price) => acc + price, 0);

  const handlePayment = () => {
    const productDescriptions = cartItems.map((item) => `${item.name} x${item.quantity}`).join(', ');
    const monto = total;
    const descripcion = productDescriptions;
    navigate(`/payments/${monto}/${descripcion}`);
  };

  const handleReturn = () => {
    navigate('/home')
  }

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.tittleCart}>Tu carrito</h2>
         {cartItems.length === 0 ? (
        <div>
          <p>Aún no has seleccionado ningun producto</p>
          <button onClick={handleReturn} className={styles.buyButton}>Volver</button>
        </div>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <ItemCart
                  item={item}
                  removeFromCart={removeFromCart}
                  prices={prices}
                  setPrices={setPrices}
                  updateCartItemQuantity={updateCartItemQuantity}
                />
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className={styles.buyButton} onClick={handlePayment}>
            Comprar
          </button>
        </>
      )}
    </div>
  </div>
);
}

export default ShoppingCart;
