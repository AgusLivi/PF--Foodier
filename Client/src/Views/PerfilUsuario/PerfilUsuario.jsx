import React from 'react';
import Style from './PerfilUsuario.module.css';

// Definición de variables de usuario
const name = "Matias";
const lastName = "Vincent";
const email = "matiasvincent2002@gmail.com";
const phone = "1138323553";
const direction = "calle falsa 123";

const PerfilUsuario = () => {
  return (
    <div className={Style.container}>
        <div className={Style.containerChild}>
          {/* Perfil del usuario */}
          <div className={Style.containerChildProfile}>
            <div className={Style.profile}>
              {/* Aquí podrías agregar una imagen de perfil */}
            </div>
            <div className={Style.profileName}>
              <h1>{name} {lastName}</h1>
            </div>
          </div>

          <div className={styles.profileInfo}>
            <div className={styles.info}>
              <label>Correo Electrónico:</label>
              <p>{userData.email}</p>
            </div>
            <div className={styles.info}>
              <label>Dirección:</label>
              <p>{userData.address}</p>
            </div>
            <div className={styles.info}>
              <label>Teléfono:</label>
              <p>{userData.contact}</p>
            </div>
            <div className={styles.info}>
              <label>Rating Promedio:</label>
              <p>{userData.average_rating}</p>
            </div>
            <div className={styles.info}>
              <label>Contraseña:</label>
              <p>{userData.password}</p>
            </div>
            <div className={styles.info}>
              <label>Método de Pago:</label>
              <p>{userData.payment}</p>
            </div>
         
            <div className={styles.info}>
              <label>Rating:</label>
              <p>{userData.rating}</p>
            </div>
            {/*
              Datos necesarios adicionales:
              - Historial
              - Ayuda
              - Configuración
              */}
          </div>
        </div>
    </div>
  );
}

export default PerfilUsuario;
