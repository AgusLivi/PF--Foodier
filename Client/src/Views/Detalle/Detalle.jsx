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
  const products = useSelector((state) => state.products);
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

  const otherProducts = products.filter(product => product.product_ID !== productDetail.product_ID);

  const handleSellerClick = () => {
    if (productDetail.Seller) {
      const seller_ID = productDetail.Seller.seller_ID;
      navigate(`/seller/${seller_ID}`);
    }
  };

  const handleProductClick = (product_ID) => {
    navigate(`/products/${product_ID}`);
  };

  console.log(productDetail);

  console.log(products);

  return (
    <div className={styles.detailContainer}>
      <img src={productDetail.image} alt={productDetail.name} className={styles.detailImg} />
      <div className={styles.detailContent}>
        <h2>{productDetail.name}</h2>
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
            <button className={styles.paymentButton} onClick={handlePayment}>
              Pagar
            </button>
          </>
        ) : (
          <>
            <p className={styles.disableOption}>Debes estar logueado para realizar acciones de compra</p>
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

      <div className={styles.sellerInfo}>
        {productDetail.Seller ? (
          <div>
            <h2 onClick={handleSellerClick} style={{ cursor: 'pointer' }}>{productDetail.Seller.name}</h2>
            <p>Dirección: {productDetail.Seller.address}</p>
            <p>Contacto: {productDetail.Seller.contact}</p>
            <p>Horario de atención: {productDetail.Seller.time}</p>
            <p>Rating: {productDetail.Seller.average_rating}</p>
            {/* Agrega más detalles del vendedor según tus necesidades */}
          </div>
        ) : (
          <p>Información del vendedor no disponible</p>
        )}
        </div>

          <div className={styles.relatedProducts}>
            <h2>Agrega otros productos</h2>
            <div className={styles.productList}>
              {otherProducts.map((product) => (
                <div
                  className={styles.productCard}
                  key={product.product_ID}
                  onClick={() => handleProductClick(product.product_ID)} // Llama a handleProductClick
                >
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <h4>${product.price}</h4>
                  {/* Agrega un botón o enlace para agregar el producto al carrito */}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Detalle;

