import React from 'react';
import styles from './PerfilNegocio.module.css'; // Importa el archivo CSS

const PerfilNegocio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerChild}>
        <div className={styles.profileBackGround}>
          <div className={styles.containerChildProfile}>
            <div className={styles.profile}></div>
            <div className={styles.profileName}>Nombre del negocio</div>
          </div>
        </div>
        <div className={styles.containerChildAll}>
          <div className={styles.profileInfo}>
            <h2>Información</h2>
            <hr />
            <div className={styles.label-input-container}>
              <label htmlFor="">Nombre y Apellido: {' '}</label>
              <input type="text" placeholder='Ej: Samuel Diaz' />
            </div>
            <hr className={styles['hr-line']} />
            <div className={styles.label-input-container}>
              <label htmlFor="">Cuit: {' '}</label>
              <input type="text" placeholder='Ej: 01-234567' />
            </div>
            <hr className={styles['hr-line']} />
          </div>
          <div className={styles.containerChildOtherProduct}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilNegocio;
