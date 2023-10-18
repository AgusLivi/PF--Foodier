import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FavCard.module.css';

const FavCard = ({ name, image, sellerId }) => {
  return (
    <div className={styles.card}>
      <Link to={`/seller/${sellerId}`}>
        {image ? (
          <img className={styles.image} src={image} alt={name} />
        ) : (
          <img
            className={styles.image}
            src="https://www.creativefabrica.com/wp-content/uploads/2020/03/09/Simple-Fork-Plate-Icon-Restaurant-Logo-Graphics-3446203-1-580x348.jpg"
            alt="Imagen no disponible"
          />
        )}
        <h3 className={styles.title}>{name}</h3>
      </Link>
    </div>
  );
};

export default FavCard;
