import React, { useRef } from "react";
import { FaBars, FaTimes ,FaHeart,FaUserAlt, FaDoorOpen,FaShoppingCart,FaMoneyBillAlt,FaStoreAlt} from "react-icons/fa";
import styles from "./NavBar.module.css"; 
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'


function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav); 
  };
// hola
  return (
    <header>
      <img src={Logo}alt="logo"></img>
      <nav ref={navRef} className={styles.nav}> 
      <div className={styles.navHPF}>
        <Link to={`/home`}>
          <a><FaStoreAlt /></a>
        </Link>
        <Link to={'/profile'}>
          <a><FaUserAlt/></a>
        </Link>
        <Link to={'/favoritos'}>
          <a><FaHeart/></a>
        </Link>
      
      </div>
      <Link to={`/create`}>
        <a><FaMoneyBillAlt /></a>
        </Link>
        <Link to={`/carrito`}>
        <a><FaShoppingCart /></a>
        </Link>
        <Link to={'/'}>
          <a><FaDoorOpen/></a>
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
