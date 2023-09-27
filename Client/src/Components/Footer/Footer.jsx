import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Footer.module.css'
const Footer = () => {
  return (
    <div className={Style.container}>
        <div><i className="fa-solid fa-house"></i><p>Inicio</p></div>
        <div><i className="fa-solid fa-magnifying-glass"></i><p>Buscar</p></div>
        <div><i className="fa-solid fa-magnifying-glass"></i><p>Favoritos</p></div>
        <div><i className="fa-solid fa-magnifying-glass"></i><p>Mi perfil</p></div>
      
    </div>
  )
}

export default Footer
