    import React, { useState, useEffect } from "react";
    import { Link, useRouteLoaderData } from "react-router-dom";
    import { createUser } from "../../Redux/actions";
    import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
    const [userDate, setUserData] = useState({
        name: "",
        email: "",
        password:"",
        location:"",
      })

    const handleInputChange = (event) => {  
        const { name, value } = event.target;
        setUserData({ ...userDate, [name]: value });
        };

    const handleSumbit = (event) =>{
        event.preventDefault();
        const formDataToSend ={
            name: userDate.name,
            email: userDate.email,
            password: userDate.password,
            location: userDate.location
        }
        dispatch(createUser(formDataToSend))
    }
    const user = useSelector((state)=>{
        state.createdUser
      })


    return(
        <div>
            <h3>Inicia sesión</h3>
            <p>Correo electrónico de la cuenta: </p>
            <input type='text' placeholder="email" 
            name="email" 
            value={userData.email} 
            onChange={}
            />
            <p>Contraseña: </p>
            <input type="password" placeholder="password"
            name="password"
            
            />



        </div>
    )
}