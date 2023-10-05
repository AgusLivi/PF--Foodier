import React from 'react';
import Style from "./Favoritos.module.css";

const Favoritos = () => {

    const image = "https://img.freepik.com/vector-premium/logo-carne-fresca_139869-393.jpg?w=2000"
    const cardStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',//quiero que la img esta mas arriba
        backgroundRepeat: 'no-repeat',
        
      };
  return (
    <div className={Style.container}>
      <div className={Style.fav} >
        <div style={cardStyle} className={Style.image}></div>
        <div className={Style.info}>
            <h1>Asadero Henry</h1>
            <p>Descripcion:{}</p>
            <p>Ubicacion:{}</p>
            <p>Horario:{}</p>
        </div>
    
      </div>
    
    </div>
  );
};

export default Favoritos;
