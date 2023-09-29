import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import style from './FooterLanding.module.css'

const FooterLanding = () => {
  return (
    <div className={style.footerwrapper}>
      <div className={style.footersectionone}>
        <div className={style.footerlogocontainer}>
          <img src={Logo} alt="" />
        </div>
        <div className={style.footericons}>
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className={style.footersectiontwo}>
       
        <div className={style.footersectioncolumns}>
          <span>244-5333-7783</span>
          
          <span>foodier@gmail.com</span>
        </div>
        <div className={style.footersectioncolumns}>
          <span>Términos y Condiciones</span>
          <span>Política de Privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default FooterLanding;