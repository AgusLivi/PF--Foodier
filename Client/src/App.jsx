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
import FormComercio from './Components/FormComercio/FormComercio'
import SearchBar from './Components/SearchBar/SearchBar'
import CreateProduct from './Views/CreateProduct/CreateProduct'


const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/formcomercio" && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/profile' element={<PerfilUsuario />} /> //esta vacio
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<SearchBar />} />
        <Route path='/business' element={<PerfilNegocio />} /> //vacio
        <Route path='/formcomercio' element={<FormComercio />} />
        <Route path='/formuser' element={<FormUser />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/create' element={<CreateProduct />} />
      </Routes>
      {location.pathname !== "/"  && location.pathname !== "/login" && location.pathname !== "/formcomercio" && <Footer />}

    </div>
  )
}

export default App