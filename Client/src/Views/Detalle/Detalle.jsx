import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getProductById } from '../../Redux/actions';
import styles from './Detalle.module.css';
import { toast, Toaster } from 'react-hot-toast';


import { CartContext } from '../../Utils/CartContext';

const Detalle = () => {
  const { product_ID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const cartContext = useContext(CartContext);
  const token = localStorage.getItem('token');

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
      toast.error('Este producto ya está en tu carrito.');
    } else {
      // Agregamos el producto al estado local del carrito
      productDetail.quantity = 1;
      setCartItems((prevCartItems) => [...prevCartItems, productDetail]);
      cartContext.addToCart(productDetail);
      const updatedCartItems = [...cartItems, productDetail];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      toast.success('El producto se ha agregado al carrito.');
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
        {token ? (
        <>
          <button className={styles.paymentButton} onClick={addCartHandler}>
            Añadir al carrito
          </button>
          <button className={styles.paymentButton} onClick={handleReserva}>
            Reservar
          </button>
          <button className={styles.paymentButton} onClick={handlePayment}>
            Pagar
          </button>
        </>
      ) : (
        <>
          <p className='disabled-buttons'>Debes estar logueado para realizar acciones de compra</p>
          <button className={styles.disabledButton} disabled>
            Añadir al carrito
          </button>
          <button className={styles.disabledButton} disabled>
            Reservar
          </button>
          <button className={styles.disabledButton} disabled>
            Pagar
          </button>
        </>
      )}
        <button className={styles.closeButton} onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default Detalle;

