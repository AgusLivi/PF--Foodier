import React, { useState, useEffect, Component } from 'react';

import styles from './PerfilUsuario.module.css';
import RatingStars from './RatingStars';
import { useSelector, useDispatch } from 'react-redux';
import { getSellerProfile, getUserById } from '../../Redux/actions';

const PerfilUsuario = () => {
  const typeuser = localStorage.getItem('rol')
  const seller = useSelector((state) => state.getSellerProfile)
  const user = useSelector((state) => state.getUserById)
  const dispatch = useDispatch();

  useEffect(()=> {
    if(typeuser === 'user'){
    dispatch(getUserById())
    } else {
      dispatch(getSellerProfile())
    }
  },[])

  return (
    <div className={styles.container}>
      {typeuser === 'user' ? (
        <div className={styles.containerChild}>
          <div className={styles.profileBackGround}>
          <div className={styles.containerChildProfile}>
              <div className={styles.profile}></div>
              <div className={styles.profileName}>{user.name}</div>
              {/* <RatingStars average={userData.average_rating} /> */}
            </div>
              </div>
          <div className={styles.containerChildAll}>
            
           
            
            <div className={styles.profileInfo}>
            <h2>Información</h2>
              <hr />
       
              <div className={styles.info}>
               <strong><i className='bx bx-envelope'></i> <label>Email:</label></strong>
                <p>{user.email}</p>
                <hr />
              </div>
              <div className={styles.info}>
                <strong><i className='bx bxs-home'></i><label>Vive en:</label></strong>
                <p>{user.location}</p>
                <hr />
              </div>
            </div>
          </div>
         
        </div>
      ) : (
        <div className={styles.containerChild}>
        <div className={styles.profileBackGround}>
        <div className={styles.containerChildProfile}>
            <div className={styles.profile}></div>
            <div className={styles.profileName}>{seller.name}</div>
            {/* <RatingStars average={userData.average_rating} /> */}
          </div>
            </div>
        <div className={styles.containerChildAll}>
          
         
          
          <div className={styles.profileInfo}>
          <h2>Información</h2>
            <hr />
     
            <div className={styles.info}>
             <strong><i className='bx bx-envelope'></i> <label>Email:</label></strong>
              <p>{seller.email}</p>
              <hr />
            </div>
            <div className={styles.info}>
              <strong><i className='bx bxs-home'></i><label>Vive en:</label></strong>
              <p>{seller.location}</p>
              <hr />
            </div>
          </div>
        </div>
       
      </div>
      )}
    </div>
  );
}

export default PerfilUsuario;
