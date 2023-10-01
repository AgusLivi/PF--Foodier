import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../Redux/actions';
import Card from '../Card/card';
import styles from './CardContainer.module.css'; // Importa los estilos de módulo CSS

const CardContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={styles.cardContainer}>
      {products.map((product, index) => (
        <Card
          key={index}
          name={product.name}
          description={product.description}
          price={product.price}
          old_price={product.old_price}
          image={product.image}
          amount={product.amount}
        />
      ))}
    </div>
  );
};

export default CardContainer;
