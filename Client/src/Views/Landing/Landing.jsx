import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { FiArrowRight } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../Assets/Logo.png";
import style from './Landing.module.css'

const Home = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Elige tu comida",
      text: "Navega entre tus opciones de comida favorita a un precio reducido.",
    },
    {
      image: ChooseMeals,
      title: "Compra en tu negocio favorito",
      text: "También puedes filtrar por restaurante favorito y ver las opciones disponibles.",
    },
    {
      image: DeliveryMeals,
      title: "Retira el producto",
      text: "El restaurante te proveerá un horario de retiro para tu producto.",
    },
  ];

  return (
    <>
     {/*NavBar section*/}
     <nav>
      <div className={style.navlogocontainer}>
        <img src={Logo} alt="" />
      </div>     
     </nav>

    <div className={style.homecontainer}>
      {/*Home Section*/}

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

      {/*Work Section*/}

      <div className={style.worksectionwrapper}>
      <div className={style.worksectiontop}>
        <h1 className={style.primaryheading}>¿Cómo funciona?</h1>
        <p className={style.primarytext}>
        ¿Te ha sobrado producto al final de la jornada? En Foodier podemos ayudarte. Haz como miles de negocios en todo el mundo y vende tu excedente a los clientes.
        </p>
      </div>
      <div className={style.worksectionbottom}>
        {workInfoData.map((data) => (
          <div className={style.worksectioninfo} key={data.title}>
            <div className={style.infoboxesimgcontainer}>
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>

 {/*Contact Section*/}
    <div className={style.contactpagewrapper}>
      <h1 className={style.primaryheading}>Tienes alguna pregunta?</h1>
      <h1 className={style.primaryheading}>Contáctanos!</h1>
      <div className={style.contactformcontainer}>
        <input type="text" placeholder="tucorreo@gmail.com" />
        <button className={style.secondarybutton}>Enviar</button>
      </div>
    </div>

   {/*Footer Section*/}
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
    </>
  );
};

export default Home;