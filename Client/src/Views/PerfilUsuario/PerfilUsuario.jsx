import React from 'react'
import Style from './PerfilUsuario.module.css'

const PerfilUsuario = () => {
  return (
    <div>
        <div className={Style.container}>{/*flex colunm es container*/}
            <div className={Style.perfil}>
              <div className={Style.logo}> <p>Foto de perfil</p></div>
              
              <div className={Style.containerNombreEmail}>
                <p className={Style.nombreUsuario}>Nombre de usuario</p>
                <p className={Style.emailUsuario}>example@gmail.com</p>
                </div>
            
            </div>
            <div className={Style.containerItem}>{/*caja de item*/}
                <div><i className="fa-solid fa-user"></i><p>Datos Personales</p></div>
                <div><p>Historial de compras</p></div>
                <div><p>Ayuda en linea</p></div>
                <div><p>Metodos de pago</p></div>
            </div>
            <div className={Style.form}>
              <label>Mi perfil</label>
              <div><p>Direccion</p></div>
              <div><p>Notificaciones</p></div>
              <div><p>Donaciones</p></div>
              <div><p>Registra tu negocio</p></div>
              <div><p>Invita amigos</p></div>
              <div className={Style.ultp}><p>Cerrar sesion</p></div>
            </div>
        </div>

    </div>
  )
}

export default PerfilUsuario
