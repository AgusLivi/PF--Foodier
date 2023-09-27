import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useEffect } from 'react'
//import style from './Login.module.css'

const Login = () => {
  const [user, setUser] = useState({});
  const  clientID = '213587509979-9539rfrnm5e9bf8m8r1mj5tl15rhjej0.apps.googleusercontent.com'
  
  useEffect(()=>{
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  const onSucces = (response) => {
    setUser(response.profileObj)
  }
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

    </div>
  )
}

export default Login