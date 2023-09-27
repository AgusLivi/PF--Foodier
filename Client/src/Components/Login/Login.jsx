import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'

//import style from './Login.module.css'

const Login = () => {
  const [user, setUser] = useState({});
  const  clientID = '213587509979-9539rfrnm5e9bf8m8r1mj5tl15rhjej0.apps.googleusercontent.com'
  
  const onSuccess = (response) => {
    setUser(response.profileObj)
  }

  const onFailure = (error) => {
    console.error('Inicio de sesión fallido:', error);
    
  };

    return (
    <div>
      <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing</h1>

      </div>
      <div className={user? "profile":"hidden"}>
        <img src={user.imageUrl} alt="" />
        <h3>{user.name}</h3>
      </div>

      <div>
        <p>Al registrarte aceptas los
            <span> Términos</span>, la
            <span> Política de privacidad</span> y la
            <span> Política de cookies</span>
        </p>

        <p>
            ¿Ya tienes una cuenta?
            <button>Inicia sesión</button>
        </p>
      </div>
      <GoogleLogin
        clientId={clientID}
        buttonText="Iniciar sesión con Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />

    </div>
  )
}

export default Login