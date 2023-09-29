import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import style from './HomeLanding.module.css'

const HomeLanding = () => {
  return (
    <div className={style.homecontainer}>
      <Navbar />
      <div className={style.homebannercontainer}>
        <div className={style.homebannerimagecontainer}>
          <img src={BannerBackground} alt="" />
        </div>
        <div className={style.hometextsection}>
          <h1 className={style.primaryheading}>
            Combatamos el desperdicio de comida
          </h1>
          <p className={style.primarytext}>
          Con Foodier podrás salvar el excedente de tus negocios favoritos y darle un buen final.
          </p>
          <button className={style.secondarybutton}>
            Entrar <FiArrowRight />{" "}
          </button>
        </div>
        <div className={style.homeimagesection}>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;