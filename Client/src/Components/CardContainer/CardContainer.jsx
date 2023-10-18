import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/card";
import styles from "./CardContainer.module.css";
import { getSellerById, getUserById, postFav } from "../../Redux/actions";

const CardContainer =  () => {

  const products =  useSelector((state) => state.products);
  const seller = useSelector((state) => state.getSellerById);
  const [selectedSeller, setSelectedSeller] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSeller) {
      // Realiza la solicitud GET a la URL con selectedSeller
      dispatch(getUserById());
      dispatch(getSellerById(selectedSeller));
      dispatch(postFav({seller_ID: selectedSeller}));
    }
  }, [selectedSeller]);

  return (
    <div className={styles.cardContainer}>
      {products.length === 0 ? (
        <h1 className={styles.textNotFound}>No hay productos disponibles</h1>
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
            seller_ID={product.SellerSellerID}
            onSellerClick={(seller_ID) => setSelectedSeller(seller_ID)}
            sellerImage={seller.image}
            onClickAddFav={onPostFav}
          />
        ))
      )}
    </div>
  );
};

export default CardContainer;
