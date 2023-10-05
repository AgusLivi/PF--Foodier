    import React, { useState, useEffect } from "react";
    import { Link, useRouteLoaderData } from "react-router-dom";
    import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password:"",
        location:"",
      })

    const handleInputChange = (event) => {  
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
        };

    const handleSumbit = (event) =>{
        event.preventDefault();
        const formDataToSend ={
            name: userData.name,
            email: userData.email,
            password: userData.password,
            location: userData.location
        }
        dispatch(createUser(formDataToSend))
    }
    return(
        <div>
            <h3>Inicia sesión</h3>


            <p>Correo electrónico de la cuenta: </p>
            <input type='text' placeholder="email" 
            name="email" 
            value={userData.email} 
            onChange={handleInputChange}
            />

            <p>Contraseña: </p>
            <input type="password" placeholder="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            />

            <Link to={`/home`}>
                <input type="submit" 
                value="Iniciar sesión"
                // onClick={handleSumbit} // comentado por q tnego que crear el controlador del back 
                ></input>
            </Link>
        </div>
    )
}

export default SignUp