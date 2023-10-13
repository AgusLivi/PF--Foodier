import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Detalle from './Views/Detalle/Detalle';
import PerfilUsuario from './Views/PerfilUsuario/PerfilUsuario'
import Login from './Components/Login/Login';
import Landing from './Views/Landing/Landing'
import FormUser from "./Components/FormUser/FormUser";
import PerfilNegocio from "./Views/PerfilNegocio/PerfilNegocio";
import Home from "./Views/Home/Home"
import Favoritos from "./Views/Favoritos/Favoritos";
import FormComercio from './Components/FormComercio/FormComercio';
import CreateProduct from './Views/CreateProduct/CreateProduct';
import SignUp from "./Components/SignUp/SignUp";
import Payment from "./Components/Payment/Payment";
import SuccessPage from "./Components/Payment/SuccessPage";
import PendingPage from "./Components/Payment/PendingPage";
import FailurePage from "./Components/Payment/FailurePage";
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Reserva from "./Components/Reserva/Reserva";
import Terminos from "./Views/TerminosYCondiciones/Terminos";
import Politica from "./Views/PoliticaDePrivacidad/Politica";
import SellerDetails from './Views/DetailSeller/DetailSeller';
import { CartProvider } from './Utils/CartContext';
import DashboardAdmin from './Views/DashboardAdmin/DasboardAdmin';
import LoginAdmin from './Views/LoginAdmin/LoginAdmin';

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <CartProvider>
        {location.pathname !== "/"
          && location.pathname !== "/login"
          && location.pathname !== "/formcomercio"
          && location.pathname !== "/formuser"
          && location.pathname !== "/userlogin"
          && location.pathname !== "/dashboard-admin"
          && location.pathname !== "/login-admin"
          && <NavBar />}


        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/profile' element={<PerfilUsuario />} />
          <Route path="/home" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/business' element={<PerfilNegocio />} />
          <Route path='/formcomercio' element={<FormComercio />} />
          <Route path="/userlogin" element={<SignUp />} />
          <Route path='/formuser' element={<FormUser />} />
          <Route path='/favoritos' element={<Favoritos />} />
          <Route path='/create' element={<CreateProduct />} />
          <Route path='/products/:product_ID' element={<Detalle />} />
          <Route path='/payments/:monto/:descripcion' element={<Payment />} />
          <Route path="/payments/success" element={<SuccessPage />} />
          <Route path="/payments/pending" element={<PendingPage />} />
          <Route path="/payments/failure" element={<FailurePage />} />
          <Route path='/carrito' element={<ShoppingCart />} />
          <Route path='/reserva' element={<Reserva />} />
          <Route path='/terminos-y-condiciones' element={<Terminos />} />
          <Route path='/politica-de-privacidad' element={<Politica />} />
          <Route path='/seller/:seller_ID' element={<SellerDetails />} />
          <Route path='/dashboard-admin' element={<DashboardAdmin />} />
          <Route path='/login-admin' element={<LoginAdmin />} />
        </Routes>
      </CartProvider>

      
    </div>
  );
}

export default App;
