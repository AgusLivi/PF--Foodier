import React from 'react';
import styles from "./card.module.css";

const Card = ({ name, description, price, old_price, image, amount }) => {
  return (
    <div className={styles.card}> 
      <h2>{name}</h2>
      <p>{description}</p>
      <p className={styles.price}>Price: {price}</p>
      <p className={styles.old_price}>Old Price: {old_price}</p>
      <img src={image} alt={name} />
      <p className={styles.amount}>Amount: {amount}</p>
    </div>
  );
};

export default Card;
