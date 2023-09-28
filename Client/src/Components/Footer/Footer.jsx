import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Footer.module.css'
const Footer = () => {
  return (
    <div className={Style.container}>
        <div><i className="fa-solid fa-house"></i><button>Inicio</button></div>
        <div><i className="fa-solid fa-magnifying-glass"></i><button>Buscar</button></div>
        <div><i className="fa-solid fa-heart"></i><Link to={`/favoritos`}><button>Favoritos</button></Link></div>
        <div><i className="fa-solid fa-user"></i><Link to={`/profile`}><button>Perfil</button></Link></div>
    </div>
  )
}

export default Footer
