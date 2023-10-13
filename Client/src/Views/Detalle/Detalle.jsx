import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getProductById } from '../../Redux/actions';
import styles from './Detalle.module.css';

import { CartContext } from '../../Utils/CartContext';

const Detalle = () => {
  const { product_ID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const cartContext = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    dispatch(getProductById(product_ID));
    return () => dispatch(cleanDetail());
  }, [dispatch, product_ID]);

  useEffect(() => {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(cartItemsFromLocalStorage);
  }, []);


  const handleClose = () => {
    navigate('/home');
  };

  const handlePayment = () => {
    const monto = productDetail.price;
    const descripcion = productDetail.name;
    navigate(`/payments/${monto}/${descripcion}`);
  };

  const handleReserva = () => {
    navigate('/reserva');
  };

  const handleFavorite = () => {
    // Implementar la funcionalidad de favoritos
  };

  const addCartHandler = () => {
    const productAlreadyExists = cartItems.some((item) => item.product_ID === productDetail.product_ID);

    if (productAlreadyExists) {
      alert('Otra vez lo vas a agregar papi?');
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, productDetail]);
      cartContext.addToCart(productDetail);
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, productDetail]));
      alert('Producto agregado al carrito');
    }
  };

  return (
    <div className={styles.detailContainer}>
      {<img src={productDetail.image} alt={productDetail.name} className={styles.detailImg} />}
      <div className={styles.detailContent}>
        <h2>{productDetail.name}</h2>
        <div onClick={handleFavorite} className={styles.detailFav}>
          {productDetail.favorite ? '❤️' : '🤍'}
          <p>{productDetail.average_rating}</p>
        </div>
        <p>{productDetail.description}</p>
        <p>Fecha de publicación: {productDetail.date}</p>
        {productDetail.categories ? (
          <p>{productDetail.categories.join(', ')}</p>
        ) : (
          <p className={styles.noCategory}>Sin categoría</p>
        )}
        <p className={styles.oldPrice}>Precio anterior: ${productDetail.old_price}</p>
        <p>Precio: ${productDetail.price}</p>
        <button className={styles.paymentButton} onClick={addCartHandler}>
          Añadir al carrito
        </button>
        <button className={styles.paymentButton} onClick={handleReserva}>Reservar</button>
        <button className={styles.paymentButton} onClick={handlePayment}>Pagar</button>
        <button className={styles.closeButton} onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default Detalle;

