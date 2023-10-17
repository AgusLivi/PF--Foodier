import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Style from "./Favoritos.module.css";
import FavsContainer from '../../Components/FavsContainer/FavsContainer';
import { getAllFav } from '../../Redux/actions';
import { getUserById } from '../../Redux/actions';

const Favoritos = () => {

  const dispatch = useDispatch();
  //const user = useSelector((state) => state.getUserById);
  //const id = user.user_ID;

  useEffect(() => {
    dispatch(getUserById())
    dispatch(getAllFav())
  }, []);

  return (
    <div>
      <FavsContainer />
    </div>
  );
};

export default Favoritos;