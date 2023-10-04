import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PerfilUsuario.module.css'; // Importa los estilos CSS

const PerfilUsuario = () => {
  const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/sellers/d6bd684b-8554-42ef-8d08-329f41ed8c98'); // Asegúrate de usar el protocolo 'http://'
        // Actualiza el estado con los datos recibidos de la base de datos
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    // Llama a la función fetchData al montar el componente
    fetchData();
  }, []); // El segundo argumento vacío [] asegura que esta solicitud se realice solo una vez al montar el componente
  return (
    <div className={styles.container}>
      {userData ? (
        <div className={styles.containerChild}>
          <div className={styles.containerChildProfile}>
            <div className={styles.profile}></div>
            <div className={styles.profileName}>{userData.name}</div>
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
          </div>
        </div>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
  );
}

export default PerfilUsuario;
