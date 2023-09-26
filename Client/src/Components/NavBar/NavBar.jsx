import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logoFoodier.png'; // Asegúrate de que la ruta sea correcta

const NavBar = () => {
  return (
    <div>
      
        <div><Link to="/Ubicacion"></Link></div>
        <div><Link to="/Shops"></Link></div>
        <div>
          <img src={logo} alt='logo'/>
        </div>
      
    </div>
  )
}

export default NavBar