import React from "react";
import Logo from "../Assets/Logo.png";
import style from './NavbarLanding.module.css'

const NavbarLanding = () => {

  return (
    <nav>
      <div className={style.navlogocontainer}>
        <img src={Logo} alt="" />
      </div>     
    </nav>
  );
};

export default NavbarLanding;