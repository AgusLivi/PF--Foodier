import React, { useRef } from "react";
import { FaBars, FaTimes ,FaHeart,FaUserAlt, FaDoorOpen,FaShoppingCart,FaMoneyBillAlt,FaStoreAlt} from "react-icons/fa";
import styles from "./NavBar.module.css"; 
import Logo from '../../assets/logoNaranja.png'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../Utils/CartContext';

function Navbar() {
  const navRef = useRef();
  const { cartCounter } = useCart(); // Utiliza useCart para acceder al contexto
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav); 
  };
  const token = localStorage.getItem('token')
  console.log(token);
  const handleClick = () => {
    if(!token){
    navigate('/login')
    }
  }

  const handleCloseSesion = () => {
    localStorage.clear()
  }

  return (
    <header>
     
      <nav ref={navRef} className={styles.nav}> 
      <div className={styles.containerLogo}>
      <img src={Logo} alt="Mi logotipo" />
      </div>
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
      <Link to={`/create`} onClick={handleClick}>
        <a><FaMoneyBillAlt /></a>
        </Link>
        <Link to={`/carrito`}>
        <a className={styles.containerNotiCarrito}><FaShoppingCart /><p className={styles.notiCarrito}>{cartCounter}</p></a>
        
        </Link>
        <Link to={'/'}>
          <a onClick={handleCloseSesion}><FaDoorOpen/></a>
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
