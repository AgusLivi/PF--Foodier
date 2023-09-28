import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Footer.module.css'
const Footer = () => {
  return (
    <div className={Style.container}>
        <div><i className="fa-solid fa-house"></i><p>Inicio</p></div>
        <div><i className="fa-solid fa-magnifying-glass"></i><p>Buscar</p></div>
        <div><i className="fa-solid fa-heart"></i><Link to={`/favoritos`}><button></button></Link></div>
        <div><i className="fa-solid fa-user"></i><Link to={`/profile`}><button></button></Link></div>
    </div>
  )
}

export default Footer
