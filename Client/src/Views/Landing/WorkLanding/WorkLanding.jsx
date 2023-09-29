import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import style from './WorkLanding.module.css'

const WorkLanding = () => {
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
  );
};

export default WorkLanding;