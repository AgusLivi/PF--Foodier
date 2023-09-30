import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./NavBar.module.css"; 
import Logo from '../../assets/Logo.png'
import { Link } from 'react-routerdom'

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav); 
  };

  return (
    <header>
      <img src={Logo}></img>
      <nav ref={navRef} className={styles.nav}> 
      <Link to={`/home`}>
        <a>Comprar</a>
      </Link>
      <Link to={`/ubicacion`}>
        <a>Ubicación</a>
      </Link>
      <Link to={`/create`}>
        <a>Vender</a>
      </Link>
    
        <button
          className={`${styles["nav-btn"]} ${styles["nav-close-btn"]}`} 
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className={styles["nav-btn"]} onClick={showNavbar}> 
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
