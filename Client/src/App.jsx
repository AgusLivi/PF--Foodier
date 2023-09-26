
import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import PerfilUsuario from './Views/PerfilUsuario/PerfilUsuario'
import NavBar from './Components/NavBar/NavBar'
import Login from './Components/Login/Login';
import Landing from './Views/Landing/landing'


const App = () => {
  const location = useLocation();
  return (
    <div>

    {location.pathname !== "/" && <NavBar />}
    <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/profile' element={<PerfilUsuario/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>

    </div>
  )
}

export default App