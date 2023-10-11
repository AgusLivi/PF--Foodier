import React, { useState, useEffect, Component } from 'react';
import styles from './PerfilUsuario.module.css';
import RatingStars from './RatingStars';
import { useDispatch, useSelector } from 'react-redux';
import { verifyToken } from '../../Redux/actions';
const PerfilUsuario = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const token = localStorage.getItem('token');
  const userId = userData ? userData.user_ID : null;

  useEffect(() => {
    // Llama a la acción para verificar el token y obtener datos del usuario
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {userId ? (
        <div className={styles.containerChild}>
          <div className={styles.profileBackGround}>
          <div className={styles.containerChildProfile}>
              <div className={styles.profile}></div>
              <div className={styles.profileName}>{userData.name}</div>
              {/* <RatingStars average={userData.average_rating} /> */}
            </div>
              </div>
          <div className={styles.containerChildAll}>
            
           
            
            <div className={styles.profileInfo}>
            <h2>Información</h2>
              <hr />
       
              <div className={styles.info}>
               <strong><i className='bx bx-envelope'></i> <label>Email:</label></strong>
                <p>{userData.email}</p>
                <hr />
              </div>
              {/* <div className={styles.info}>
                <strong><i className='bx bxs-home'></i><label>Vive en:</label></strong>
                <p>{userData.address}</p>
                <hr />
              </div> */}
              {/* <div className={styles.info}>
                <strong><i className='bx bx-phone'></i><label>Teléfono:</label></strong>
                <p>{userData.contact}</p>
                <hr />
              </div> */}
              {/* <div className={styles.info}>
               <strong><i className='bx bxs-credit-card'></i>  <label>Método de Pago:</label></strong>
                <p>{userData.payment}</p>
              </div> */}

              {/* <hr />
              <div>
                <input type='submit'>Historial</input>
              </div> */}
            </div>
          </div>
         
        </div>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
  );
}

export default PerfilUsuario;
