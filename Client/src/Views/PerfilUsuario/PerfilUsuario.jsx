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
                <div><i className={Style.icon}></i><p>Datos Personales</p></div>
                <div><i className={Style.icon}></i><p>Historial de compras</p></div>
                <div><i className={Style.icon}></i><p>Ayuda en linea</p></div>
                <div><i className={Style.icon}></i><p>Metodos de pago</p></div>
            </div>
            <div className={Style.form}>
              <label>Mi perfil</label>
              <div><i className={Style.icon}></i><p>Direccion</p></div>
              <div><i className={Style.icon}></i><p>Notificaciones</p></div>
              <div><i className={Style.icon}></i><p>Donaciones</p></div>
              <div><i className={Style.icon}></i><p>Registra tu negocio</p></div>
              <div><i className={Style.icon}></i><p>Invita amigos</p></div>
              <div className={Style.ultp}><i className={Style.icon}></i><p>Cerrar sesion</p></div>
            </div>
        </div>

    </div>
  )
}

export default PerfilUsuario
