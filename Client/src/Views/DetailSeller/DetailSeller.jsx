import React, { useState, useEffect } from 'react';
import { cleanSeller, getPostsBySellerById, getSellerById, getUserById } from '../../Redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import style from './DetailSeller.module.css'
import CommentSection from '../Comments/Comments'

const SellerDetails = () => {
    const dispatch = useDispatch()
    const { seller_ID } = useParams(); 
    const seller = useSelector((state) => state.getSellerById); 
    const user = useSelector((state) => state.getUserById)
    const posts = useSelector((state) => state.getPostBySellerId); 
    console.log("POSTEOS BRODEL",posts);
    
    useEffect(() => {
      dispatch(getSellerById(seller_ID));
      dispatch(getUserById());
      dispatch(getPostsBySellerById(seller_ID))
      return () => dispatch(cleanSeller());
    }, [dispatch, seller_ID]);

    
    return (
      <div className={style['seller-container']}>
        <div className={style['seller-profile']}>
          <div className={style['seller-details']}>
           <img
            src={seller.image}
            alt={seller.image ? '' : seller.name ? seller.name[0] : ''}
          />

 
            <h2>{seller.name}</h2>
            <p>Correo Electrónico: {seller.email}</p>
            <p>Teléfono: {seller.contact}</p>
            <p>Dirección: {seller.address}</p>
            <p>Rating: {seller.average_rating}</p>
          {/*<p>Método de Pago: {seller.payment?.join(', ')}</p>*/}
          </div>

          <div className={style['comment-section-container']}>
            <CommentSection seller_ID={seller_ID} />
          </div>
          <div className={style['comment-container']}>
           {posts?.map((post) => (
          <div className={style['comment-container-child']} key={post.post_ID}>
          <p>{post.comments}</p>
         </div>
        ))}
    </div>
        </div>
    </div>

    );
  };
  
  export default SellerDetails;