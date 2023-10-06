import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/card";
import styles from "./CardContainer.module.css";

const CardContainer =  () => {
  const products =  useSelector((state) => state.products);
  console.log(products);

  return (
    <div className={styles.cardContainer}>
      { products?.map((product, index) => {
        return (
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
          />
        )
      })}
    </div>
  );
};

export default CardContainer;
