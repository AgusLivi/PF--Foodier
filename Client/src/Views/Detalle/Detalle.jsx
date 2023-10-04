import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getProductById } from '../../Redux/actions';

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

  return (
    <div>
      {productDetail ? (
        <div>
          <h2>{productDetail.name}</h2>
          <p>{productDetail.rating}</p>
          <button>Añadir a favoritos</button> {/*Editar la funcionalidad*/}
          <h1>Descripcion:</h1>
          <p>{productDetail.description}</p>
          <p>{productDetail.date}</p>
          {/*products.categories.length ? (
          <p>{products.categories.join(', ')}</p>
        ) : (
          <p>Sin categoría</p>
        )*/}
          <p>Precio viejo: {productDetail.old_price}</p>
          <p>Precio: {productDetail.price}</p>
          <button>-</button>
          <p>{productDetail.amount}</p>
          <button>+</button>
          <img src={productDetail.image} alt={productDetail.name} />
          <button>Añadir al carrito</button> {/*Editar la funcionalidad*/}
          <button>Pagar</button> {/*Editar la funcionalidad*/}
          <button onClick={handleClose}>Cerrar</button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detalle;