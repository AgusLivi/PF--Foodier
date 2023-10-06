import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getProductById } from '../../Redux/actions';
import styles from './Detalle.module.css';

const Detalle = () => {
  const { product_ID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const [cartItems, setCartItems] = useState([]);
  console.log('pDetail:', productDetail);

  useEffect(() => {
    dispatch(getProductById(product_ID));
    return () => dispatch(cleanDetail())
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


  const handleFavorite = () => {
    // Dejo esto para implementar el estado de favoritos
  };

  const addCartHandler = () => {
    // verificamos si el producto ya existe en el carrito
    const productAlreadyExists = cartItems.some((item) => item.product_ID === productDetail.product_ID);
  
    if (productAlreadyExists) {
      alert('Otra vez lo vas a agregar papi?');
    } else {
      // agregamos el producto al estado local del carrito
      setCartItems((prevCartItems) => [...prevCartItems, productDetail]);
  
      // actualiza el localStorage con los ítems actuales del carrito
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, productDetail]));
    }
  };

return (
        <div className={styles.detailContainer}>
            <img src={productDetail.image} alt={productDetail.name} className={styles.detailImg}/>
            <div className={styles.detailContent}>
                {productDetail ? (
                    <div>
                        <h2>
                            {productDetail.name}
                            </h2>
                          <div onClick={handleFavorite} className={styles.detailFav}>
                            {productDetail.favorite ? '❤️' : '🤍'} {/*Agregar funcionalidad*/}
                        <p>{productDetail.average_rating}</p></div>
                        <h2>Descripción:</h2>
                        <p>{productDetail.description}</p>
                        <p>Hora de publicación: {productDetail.date}</p>
                        {productDetail.categories ? (
                            <p>{productDetail.categories.join(', ')}</p>
                        ) : (
                            <p className={styles.noCategory}>Sin categoría</p>
                        )}
                        <p className={styles.oldPrice}>Precio viejo: {productDetail.old_price}</p>
                        <p>Precio: {productDetail.price}</p>
                        <div className={styles.quantityContainer}>
                            <button className={styles.quantityButton}>-</button>
                            <p>{productDetail.amount}</p>
                            <button className={styles.quantityButton}>+</button>
                        </div>

                        <button className={styles.paymentButton} onClick={addCartHandler}>Añadir al carrito</button> {/*Agregar funcionalidad*/}
                        <button className={styles.paymentButton}>Reservar</button> {/*Editar pop up y tiempo de espera*/}
                        <button className={styles.paymentButton} onClick={handlePayment}>Pagar</button>

                        <button className={styles.closeButton} onClick={handleClose}>Cerrar</button>
                    </div>
                ) : (
                    <p className={styles.detailLoading}>Cargando...</p>
                )}
            </div>
        </div>
    );
};

export default Detalle;