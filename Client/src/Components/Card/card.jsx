import React from 'react';
import styles from "./card.module.css";
import { Link } from "react-router-dom"

const Card = ({ name, description, price, old_price, image, amount, date, product_ID }) => {
  const dateSplit = date.split("T")
  const dateOk = dateSplit[0]
  return (

    <div key={product_ID} className={styles.card}> 
    <Link to={`/products/${product_ID}`}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p className={styles.price}>Price: {price}</p>
      <p className={styles.old_price}>Old Price: {old_price}</p>
      <img src={image} alt={name} />
      <p className={styles.amount}>Amount: {amount}</p>
      <p className={styles.amount}>Fecha de posteo {dateOk}</p>
    </Link>
    </div>
  );
};

export default Card;
