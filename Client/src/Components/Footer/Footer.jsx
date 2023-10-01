import React from 'react'
import Style from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={Style.container}>
        <div><box-icon name='home-alt-2'></box-icon><Link to={`/home`}><button className={Style.button2}>Inicio</button></Link></div>
        <div><box-icon name='search-alt-2'></box-icon><Link to={`/search`}><button className={Style.button2}>Buscar</button></Link></div>
        <div><box-icon name='user'></box-icon><Link to={`/profile`}><button className={Style.button2}>Perfil</button></Link></div>
        <div><box-icon name='heart' ></box-icon><Link to={`/favoritos`}><button className={Style.button2}>Favoritos</button></Link></div>
        <div><box-icon name='log-out' ></box-icon><Link to={`/`}><button className={Style.button2}>Cerrar Sesión</button></Link></div>
    </div>
  )
}

export default Footer