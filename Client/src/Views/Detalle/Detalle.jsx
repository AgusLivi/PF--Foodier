import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getProductById } from '../../Redux/actions';
import styles from './Detalle.module.css';

const Detalle = () => {
  const { product_ID } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  console.log('pDetail:', productDetail);

  useEffect(() => {
    dispatch(getProductById(product_ID));
    return () => dispatch(cleanDetail())
  }, [dispatch, product_ID]);

  const handleClose = () => {
    history.push('/home');
  };

  const handleFavorite = () => {
    // Dejo esto para implementar el estado de favoritos
  };

return (
        <div className={styles.container}>
            <img src={productDetail.image} alt={productDetail.name} />
            <div className={styles.content}>
                {productDetail ? (
                    <div>
                        <h2>
                            {productDetail.name}
                            </h2>
                          <div
                              onClick={handleFavorite}
                          >
                              {productDetail.favorite ? '❤️' : '🤍'}
                        <p>{productDetail.rating}</p></div>
                        <h1>Descripcion:</h1>
                        <p>{productDetail.description}</p>
                        <p>{productDetail.date}</p>
                        {productDetail.categories ? (
                            <p>{productDetail.categories.join(', ')}</p>
                        ) : (
                            <p className={styles.noCategory}>Sin categoría</p>
                        )}
                        <p>Precio viejo: {productDetail.old_price}</p>
                        <p>Precio: {productDetail.price}</p>
                        <div>
                            <button className={styles.quantityButton}>-</button>
                            <p>{productDetail.amount}</p>
                            <button className={styles.quantityButton}>+</button>
                        </div>
                        <button className={styles.addButton}>Añadir al carrito</button>
                        <button className={styles.addButton}>Pagar</button>
                        <button className={styles.closeButton} onClick={handleClose}>Cerrar</button>
                    </div>
                ) : (
                    <p className={styles.loading}>Cargando...</p>
                )}
            </div>
        </div>
    );
};

export default Detalle;