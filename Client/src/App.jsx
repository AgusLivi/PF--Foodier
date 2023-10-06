//App.jsx
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
import FormComercio from './Components/FormComercio/FormComercio';
import CreateProduct from './Views/CreateProduct/CreateProduct';
import Detalle from './Views/Detalle/Detalle';
import SignUp from "./Components/SignUp/SignUp";
import Payment from "./Components/Payment/Payment";
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';



const App = () => {
  const location = useLocation();
  return (
    <div className="App">

      {location.pathname !== "/" 
      && location.pathname !== "/login" 
      && location.pathname !== "/formcomercio" 
      && location.pathname !== "/formuser" 
      && location.pathname !== "/userlogin" 
      && <NavBar />}

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/profile' element={<PerfilUsuario />} /> {/*vacio*/}
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/business' element={<PerfilNegocio />} /> {/*vacio*/}
        <Route path='/formcomercio' element={<FormComercio />} />
        <Route path="/userlogin" element={<SignUp/>}/> 
        <Route path='/formuser' element={<FormUser />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/products/:product_ID' element={<Detalle/>} />
        <Route path='/payments/:monto/:descripcion' element={<Payment/>}/>
        <Route path='/carrito' element={<ShoppingCart />} />


      </Routes>

      {location.pathname !== "/"  
      && location.pathname !== "/login" 
      && location.pathname !== "/formcomercio" 
      && location.pathname !== "/formuser" 
      && location.pathname !== "/userlogin" 
      && <Footer />}

    </div>
  )
}

export default App