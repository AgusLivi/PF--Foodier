import React from "react";
import style from './ContactLanding.module.css'

const ContactLanding = () => {
  return (
    <div className={style.contactpagewrapper}>
      <h1 className={style.primaryheading}>Tienes alguna pregunta?</h1>
      <h1 className={style.primaryheading}>Contáctanos!</h1>
      <div className={style.contactformcontainer}>
        <input type="text" placeholder="tucorreo@gmail.com" />
        <button className={style.secondarybutton}>Enviar</button>
      </div>
    </div>
  );
};

export default ContactLanding;