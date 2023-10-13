import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/card";
import styles from "./CardContainer.module.css";
import { getSellerById } from "../../Redux/actions";

const CardContainer =  () => {
  const products =  useSelector((state) => state.products);
  const [selectedSeller, setSelectedSeller] = useState(null)

  return (
    <div className={styles.cardContainer}>
      {products.length === 0 ? (
        <h1>No hay productos disponibles</h1>
      ) : ( 
       products?.map((product, index) => 
            (
          <Card
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            old_price={product.old_price}
            image={product.image}
            amount={product.amount}
            date={product.date}
            product_ID={product.product_ID}
            seller_ID={product.seller_ID}
            onSellerClick={(sellerID) => setSelectedSeller(sellerID)}
          />
        ))
      )}
    </div>
  );
};

export default CardContainer;
