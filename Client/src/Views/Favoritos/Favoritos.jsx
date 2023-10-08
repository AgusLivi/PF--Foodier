import React, { useEffect } from 'react';
import Style from "./Favoritos.module.css";
import { getAllFav } from '../../Redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

const Favoritos = () => {

  const allFavs = useSelector((state) => state.allFavoritesSeller);
  console.log('allFavs: ', allFavs);

  const dispatch = useDispatch();
  const { user_Id } = useParams();

  const id = 'fa5eee04-93a2-44dc-8618-05be0d21ad6c';


  /*const image = "https://img.freepik.com/vector-premium/logo-carne-fresca_139869-393.jpg?w=2000"
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',//quiero que la img esta mas arriba
    backgroundRepeat: 'no-repeat',

  };*/

  useEffect(() => {
    dispatch(getAllFav(/*recibe un id*/ id))
  })
  return (
    <div className={Style.container}>
      <div className={Style.fav} >
        <div style={cardStyle} className={Style.image}></div>
        <div className={Style.info}>
          <h1>Asadero Henry</h1>
          <p>Descripcion:{ }</p>
          <p>Ubicacion:{ }</p>
          <p>Horario:{ }</p>
        </div>

      </div>

    </div>
  );
};

export default Favoritos;
