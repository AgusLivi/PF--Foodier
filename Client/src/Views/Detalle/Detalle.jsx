import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getProductById } from '../../Redux/actions';
import { getSimilarProducts } from '../../Redux/actions';
import { Carousel } from 'reactstrap';
import styles from './Detalle.module.css';

const Detalle = () => {
  const { product_ID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const similarProducts = useSelector((state) => state.similarProducts);
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

  useEffect(() => {
    if (productDetail && productDetail.categories) {
      dispatch(getSimilarProducts(productDetail.product_ID, productDetail.categories));
    }
  }, [dispatch, productDetail]);

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
      alert('Producto agregado al carrito')
    }
  };

return (
        <div className={styles.detailContainer}>
            {<img src={productDetail.image} alt={productDetail.name} className={styles.detailImg}/>}
            <div className={styles.detailContent}>
                {productDetail ? (
                    <div>
                        <h2>
                            {productDetail.name}
                            </h2>
                        <p>{productDetail.description}</p>
                        <p>Fecha de publicación: {productDetail.date}</p>
                        {productDetail.categories ? (
                            <p>{productDetail.categories.join(', ')}</p>
                        ) : (
                            <p className={styles.noCategory}>Sin categoría</p>
                        )}
                        <p className={styles.oldPrice}>Precio anterior: ${productDetail.old_price}</p>
                        <p>Precio: ${productDetail.price}</p>
                        <div className={styles.buttonContainer}>
                        <button className={styles.paymentButton} onClick={addCartHandler}>Añadir al carrito</button>
                        <button className={styles.paymentButton} onClick={handleReserva}>Reservar</button> 
                        <button className={styles.paymentButton} onClick={handlePayment}>Pagar</button>
                        <button className={styles.closeButton} onClick={handleClose}>Cerrar</button>
                        </div>
                    </div>
                ) : (
                    <p className={styles.detailLoading}>Cargando...</p>
                )}
            </div>
            {similarProducts.length > 0 && (
            <div className="container mt-4">
              <h3>Productos Similares</h3>
              <Carousel>
                {similarProducts.map((product, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={product.image}
                      alt={product.name}
                    />
                    <Carousel.Caption>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <p>Precio: ${product.price}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          )}
        </div>
      );
    };

export default Detalle;