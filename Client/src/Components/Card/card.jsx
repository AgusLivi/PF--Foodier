import React from 'react';
import styles from "./card.module.css";
import { Link } from "react-router-dom"
import { FaHeart } from 'react-icons/fa';


const Card = ({ name, description, price, old_price, image, amount, date, product_ID, seller_ID, onSellerClick, sellerImage, onClickAddFav }) => {
  const dateSplit = date.split("T")
  const dateOk = dateSplit[0]

  return (
    <div key={product_ID} className={styles.card}>
      <div className={styles.love} onClick={() => onClickAddFav(seller_ID)} ><FaHeart/></div>{/*poner funcionalidad para agregar card a fav*/}
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
      
          <Link to={`/seller/${seller_ID}`} onClick={() => onSellerClick(seller_ID)} >
          <div className={styles.profileImg}></div>
          <img src={sellerImage}></img>
          </Link>
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
