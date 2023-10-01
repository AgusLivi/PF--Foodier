import React from 'react'
import Style from './PerfilUsuario.module.css'
const name = "Matias"
const lastName = "Vincent"
const PerfilUsuario = () => {
  return (
    <div className={Style.container}>
        <div className={Style.containerChild}>
          <div className={Style.containerChildProfile}>

            <div className={Style.profile}>

             
            </div>
            <div className={Style.profileName}>
                    <h1>{name} {lastName}</h1>
                </div>
          
          </div> 
          <hr/>
          <div className={Style.profileInfo}>
            {/*
            datos necesario:
            email,telefono,historial,direccio,ayuda,configuracion
            */}
          </div>
        </div>

    </div>
  )
}

export default PerfilUsuario
