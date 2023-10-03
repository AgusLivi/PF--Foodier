import React, {useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from '../../Redux/actions';

const Detalle = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const handleClose = () => {
    history.push('/home');
  };
    
  return (
    <div>
      {product ? (
      <div>
        <h2>{product.name}</h2>
        <p>{product.rating}</p>
        <button>Añadir a favoritos</button> {/*Editar la funcionalidad*/}
        <h1>Descripcion:</h1>
        <p>{product.description}</p>
        <p>{product.date}</p>
        {product.categories.length ? (
          <p>{product.categories.join(', ')}</p>
        ) : (
          <p>Sin categoría</p>
        )}
        <p>Precio viejo: {product.old_price}</p>
        <p>Precio: {product.price}</p>
        <button>-</button>
        <p>{product.amount}</p>
        <button>+</button>
        <img src={product.image} alt={product.name}/>
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