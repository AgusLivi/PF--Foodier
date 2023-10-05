import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getProductById } from '../../Redux/actions';
import styles from './Detalle.module.css';

const Detalle = () => {
  const { product_ID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  console.log('pDetail:', productDetail);

  useEffect(() => {
    dispatch(getProductById(product_ID));
    return () => dispatch(cleanDetail())
  }, [dispatch, product_ID]);

  const handleClose = () => {
    navigate('/home');
  };

  const handleFavorite = () => {
    // Dejo esto para implementar el estado de favoritos
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
                        <button className={styles.paymentButton}>Añadir al carrito</button> {/*Agregar funcionalidad*/}
                        <button className={styles.paymentButton}>Pagar</button> {/*Agregar funcionalidad*/}
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