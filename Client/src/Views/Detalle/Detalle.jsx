import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cleanDetail, getProductById } from '../../Redux/actions';
import styles from './Detalle.module.css';

const Detalle = () => {
  const { product_ID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad

  useEffect(() => {
    dispatch(getProductById(product_ID));
    return () => dispatch(cleanDetail());
  }, [dispatch, product_ID]);

  useEffect(() => {
    const cartItemsFromLocalStorage =
      JSON.parse(localStorage.getItem('cartItems')) || [];
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
    const productAlreadyExists = cartItems.some(
      (item) => item.product_ID === productDetail.product_ID
    );

    if (productAlreadyExists) {
      alert('Este producto ya está en el carrito.');
    } else {
      // Crea un nuevo objeto de producto con la cantidad seleccionada
      const productWithQuantity = {
        ...productDetail,
        quantity: quantity,
      };

      // Agrega el producto al estado local del carrito
      setCartItems((prevCartItems) => [...prevCartItems, productWithQuantity]);

      // Actualiza el localStorage con los ítems actuales del carrito
      localStorage.setItem(
        'cartItems',
        JSON.stringify([...cartItems, productWithQuantity])
      );
    }
  };


  return (
    <div className={styles.detailContainer}>
      {<img src={productDetail.image} alt={productDetail.name} className={styles.detailImg} />}
      <div className={styles.detailContent}>
        {productDetail ? (
          <div>
            <h2>{productDetail.name}</h2>
            <div onClick={handleFavorite} className={styles.detailFav}>
              {productDetail.favorite ? '❤️' : '🤍'} {/*Agregar funcionalidad*/}
              <p>{productDetail.average_rating}</p>
            </div>
            <h2>Descripción:</h2>
            <p>{productDetail.description}</p>
            <p>Fecha de publicación: {productDetail.date}</p>
            {productDetail.categories ? (
              <p>{productDetail.categories.join(', ')}</p>
            ) : (
              <p className={styles.noCategory}>Sin categoría</p>
            )}
            <p className={styles.oldPrice}>Precio viejo: {productDetail.old_price}</p>
            <p>Precio: {productDetail.price}</p>
            <div className={styles.quantityContainer}>
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity(quantity - 1 >= 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button className={styles.paymentButton} onClick={addCartHandler}>
              Añadir al carrito
            </button>
            <button className={styles.paymentButton}>Reservar</button>
            <button className={styles.paymentButton} onClick={handlePayment}>
              Pagar
            </button>

            <button className={styles.closeButton} onClick={handleClose}>
              Cerrar
            </button>
          </div>
        ) : (
          <p className={styles.detailLoading}>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default Detalle;
