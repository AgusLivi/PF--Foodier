import { Routes, Route, useLocation } from "react-router-dom";
import PerfilUsuario from './Views/PerfilUsuario/PerfilUsuario'
import NavBar from './Components/NavBar/NavBar'
import Login from './Components/Login/Login';
import Landing from './Views/Landing/Landing'
import FormUser from "./Components/FormUser/FormUser";
import PerfilNegocio from "./Views/PerfilNegocio/PerfilNegocio";
import Footer from "./Components/Footer/Footer";
import Home from "./Views/Home/Home"
import Favoritos from "./Views/Favoritos/Favoritos";


const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" || location.pathname !== "/login"  && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/profile' element={<PerfilUsuario />} /> //esta vacio
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/business' element={<PerfilNegocio />} /> //vacio
        <Route path='/formuser' element={<FormUser />} />
        <Route path='/favoritos' element={<Favoritos />} />
      </Routes>
      {location.pathname !== "/"  || location.pathname !== "/login" && <Footer />}

    </div>
  )
}

export default App