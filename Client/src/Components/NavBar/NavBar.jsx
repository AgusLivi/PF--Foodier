import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logoFoodier.png'; // Asegúrate de que la ruta sea correcta
import Style from './NavBar.module.css'
const NavBar = () => {
  return (
    <div className={Style.container}>
        
        <div><Link to="/Ubicacion"><i className="fa-solid fa-location-dot"></i> </Link></div>
        <div>
          <img src={logo} alt='logo' className={Style.logo}/>
        </div>
        <div><Link to="/Shops"><i className="fa-solid fa-cart-shopping"></i></Link></div>
       
      
    </div>
  )
}

export default NavBar