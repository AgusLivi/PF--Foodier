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
          <hr />
          {/* Información del perfil */}
          <div className={Style.profileInfo}>
            <div className={Style.info}>
              {/* Email */}
              <div>
                <label>Email</label>
                <p>{email}</p>
              </div>
              {/* Teléfono */}
              <div>
                <label>Phone</label>
                <p>{phone}</p>
              </div>
              {/* Dirección */}
              <div>
                <label>Direction</label>
                <p>{direction}</p>
              </div>
              <div>
                <label>ayuda</label>
                <p><a href="#">foodierAyuda.com</a></p>
              </div>
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
