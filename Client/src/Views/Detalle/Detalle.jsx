import React, {useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from '../../Redux/actions';

const Detalle = () => {
  const { id } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const handleClose = () => {
    history.push('/home');
  };
    
  return (
    <div>
      {products ? (
      <div>
        <h2>{products.name}</h2>
        <p>{products.rating}</p>
        <button>Añadir a favoritos</button> {/*Editar la funcionalidad*/}
        <h1>Descripcion:</h1>
        <p>{products.description}</p>
        <p>{products.date}</p>
        {products.categories.length ? (
          <p>{products.categories.join(', ')}</p>
        ) : (
          <p>Sin categoría</p>
        )}
        <p>Precio viejo: {products.old_price}</p>
        <p>Precio: {products.price}</p>
        <button>-</button>
        <p>{products.amount}</p>
        <button>+</button>
        <img src={products.image} alt={products.name}/>
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