import React, { useEffect } from 'react';
import { getAllFav } from '../../Redux/actions';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import Style from "./Favoritos.module.css";
import FavsContainer from '../../Components/FavsContainer/FavsContainer';

const Favoritos = () => {

  const dispatch = useDispatch();
  const { user_Id } = useParams(); //debe ser el id que se le manda al back, pero aun no me trae el id por params

  const id = 'e1f79504-4942-4f78-807d-9db50405eae5'; //es provicional para ponerle el id aca al back para que traiga los resultados
  //ESTILOS
  const image = "https://img.freepik.com/vector-premium/logo-carne-fresca_139869-393.jpg?w=2000"
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',//quiero que la img esta mas arriba
    backgroundRepeat: 'no-repeat',
  };

  useEffect(() => {
    dispatch(getAllFav(id))
  }, []);

  return (
    <div>
      <FavsContainer />
    </div>
  );
};

export default Favoritos;