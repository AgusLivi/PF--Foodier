import React from 'react';
import styles from "./card.module.css";
import { Link } from "react-router-dom"

const Card = ({ name, description, price, old_price, image, amount, date, product_ID }) => {
  const dateSplit = date.split("T")
  const dateOk = dateSplit[0]

  return (
    <div key={product_ID} className={styles.card}>
      
      <Link to={`/products/${product_ID}`} className={styles.containerInfo}>
      <div className={styles.containerInfoChild}>
        <div className={styles.containerImg}>  
          {image ? (
            <img src={image} alt="Imagen del producto" />
          ) : (
            <h1>Imagen no disponible</h1>
          )}
        </div>
        <div className={styles.lineProfile}>
          <div className={styles.profileImg}></div>
        </div>


          <div className={styles.info}>
            <div className={styles.nameDescription}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
          
            <p className={styles.amount}>Stock: {amount}</p>
            <p className={styles.date}>Fecha de publicacion :{dateOk}</p>
            </div>
            <div className={styles.prices}>
            <p className={styles.oldPrice}>${old_price}</p>
            <p className={styles.price}>${price}</p>
            </div>
        
          </div>
          </div>
      </Link>
    </div>
    
  );
};

export default Card;
