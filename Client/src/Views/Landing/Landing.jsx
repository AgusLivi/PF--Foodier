import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import BannerBackground from "../../assets/home-banner-background.svg";
import BannerImage from "../../assets/home-banner-image.svg";
import PickMeals from "../../assets/pick-meals-image.svg";
import ChooseMeals from "../../assets/choose-image.svg";
import DeliveryMeals from "../../assets/delivery-image.svg";
import { FiArrowRight } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { BiLogoInstagram } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../../assets/Logo.svg";
import style from './Landing.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; // Importa 'toast'

const Home = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const linkTerminos = () => {
    navigate("/terminos-y-condiciones");
  };

  const linkPolitica = () => {
    navigate("/politica-de-privacidad");
  };

  const linkAdmin = () => {
    navigate("/admin")
  }

  const handleSubscribe = () => {
    if (email) {
      // Realiza alguna validación adicional del correo si es necesario
  
      // Muestra una notificación de éxito con toast
      toast(
        "Gracias por suscribirte a nuestro Newsletter👏, siempre tendras las últimas novedades de Foodier! ",
        {
          duration: 6000,
        }
      );
        
      // Borra el correo electrónico después de mostrar la notificación
      setEmail('');
    } else {
      // Muestra una notificación de error si el campo de correo está vacío
      toast.error('Por favor, ingresa tu correo antes de suscribirte');
    }
  };
  
  return (
    <>
      <div className={style.homecontainer}>
        <img src={Logo} alt="Logo" />
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
            <Link className={style.link} to={`/login`}>
              <button className={style.secondarybutton}>
                Entrar <FiArrowRight />{" "}
              </button>
            </Link>
          </div>
          <div className={style.homeimagesection}>
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>

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

      <div className={style.contactpagewrapper}>
        <h1 className={style.primaryheading}>Tienes alguna pregunta?</h1>
        <h1 className={style.primaryheading}>Contáctanos!</h1>
        <div className={style.contactformcontainer}>
          <input
            type="text"
            placeholder="tucorreo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={style.secondarybutton}
            onClick={handleSubscribe}
          >
            Enviar
          </button>
        </div>
      </div>

      <div className={style.footerwrapper}>
        <div className={style.footersectionone}>
          <div className={style.footerlogocontainer}>
            <img src={Logo} alt="" />
          </div>
          <div className={style.footericons}>
            <a>
              <SiLinkedin />
            </a>
            <a href="https://www.instagram.com/foodierapp/">
              <BiLogoInstagram />
            </a>
            <a href="https://www.facebook.com/foodierx/">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className={style.footersectiontwo}>
          <div className={style.footersectioncolumns}>
            <span>1136183553</span>
            <span>helpfoodier@gmail.com</span>
          </div>
          <div className={style.footersectioncolumns}>
            <span onClick={linkTerminos}>Términos y Condiciones</span>
            <span onClick={linkPolitica}>Política de Privacidad</span>
            <span onClick={linkAdmin}>admin</span>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplo de Modal"
        className={style.modalContent}
        overlayClassName={style.modalOverlay}
      >
        <div className={style.modalTextContainer}>
          <h2 className={style.primaryheading}>¿Sabías estos datos?</h2>
          <p className={style.primarytext}>El desperdicio de alimentos es responsable del 10% de las emisiones de gases de efecto invernadero.</p>
          <p className={style.primarytext}>Desperdiciamos 2500 millones de toneladas de comida mientras 828 millones de personas pasan hambre.</p>
          <p className={style.primarytext}>Este desperdicio nos cuesta 1,2 billones de dólares por año.</p>
          <button className={style.secondarybutton} onClick={closeModal}>Cerrar</button>
        </div>
      </Modal>
    </>
  );
};

export default Home;
