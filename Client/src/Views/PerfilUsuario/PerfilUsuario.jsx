import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PerfilUsuario.module.css';
import RatingStars from './RatingStars';

const PerfilUsuario = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/sellers/60eb0162-df01-4668-84cd-4ad3e9ce4570');
        setUserData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {userData ? (
        <div className={styles.containerChild}>
          <div className={styles.profileBackGround}>
          <div className={styles.containerChildProfile}>
              <div className={styles.profile}></div>
              <div className={styles.profileName}><h1>{userData.name}</h1></div>
              <RatingStars average={userData.average_rating} />
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
              <div className={styles.info}>
                <strong><i className='bx bxs-home'></i><label>Vive en:</label></strong>
                <p>{userData.address}</p>
                <hr />
              </div>
              <div className={styles.info}>
                <strong><i className='bx bx-phone'></i><label>Teléfono:</label></strong>
                <p>{userData.contact}</p>
                <hr />
              </div>
              <div className={styles.info}>
               <strong><i className='bx bxs-credit-card'></i>  <label>Método de Pago:</label></strong>
                <p>{userData.payment}</p>
              </div>
              <hr />
            </div>
          </div>
          <div className={styles.containerChildOtherProduct}>
            {/* Aquí puedes agregar el carrusel u otros elementos */}
          </div>
        </div>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
  );
}

export default PerfilUsuario;
