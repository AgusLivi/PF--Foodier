import React, { useState, useEffect } from 'react';
import { getSellerById } from '../../Redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import CommentSection from '../Comments/Comments'
const SellerDetails = () => {
    const dispatch = useDispatch()
    const { seller_ID } = useParams(); 
    const seller = useSelector((state) => state.getSellerById); 

    useEffect(() => {
      dispatch(getSellerById(seller_ID));
    }, [dispatch, seller_ID]);


    return (
      <div className="seller-details">
        <img src={seller.image} alt={seller.name} />
        <h2>{seller.name}</h2>
        <p>Correo Electrónico: {seller.email}</p>
        <p>Teléfono: {seller.contact}</p>
        <p>Dirección: {seller.address}</p>
        <p>Rating: {seller.average_rating}</p>
        <p>Método de Pago: {seller.payment?.join(', ')}</p>



        <div>
          <CommentSection seller_ID={seller_ID}/>
        </div>
      </div>
  

  
    );
  };
  
  export default SellerDetails;