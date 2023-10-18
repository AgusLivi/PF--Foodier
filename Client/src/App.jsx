import React from 'react';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import { toast } from 'react-hot-toast';

const App = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isUser = localStorage.getItem('rol');

  const allowedRoutesForGuest = [
    '/login',
    '/',
    '/home',
    '/formcomercio',
    '/formuser',
    '/userlogin',
    '/politica-de-privacidad',
    '/terminos-y-condiciones',
    '/mas18',
    '/mas18/dashboard'
  ];
  // Comprueba si el usuario es invitado  
  if (!token) {
    if (!allowedRoutesForGuest.includes(location.pathname) && !location.pathname.startsWith('/products')) {
      toast.error('Debes estar logueado para acceder a esta pagina.');
      return <Navigate to="/login" />;
    }
  }
  // Comprueba si el usuario es un usuario regular
  if (isUser === 'user' && location.pathname === '/create') {
    toast.error('No tienes permiso para acceder a la pagina de creción.');
    return <Navigate to="/home" />;
  }

  return (
    <div className="App">
      <CartProvider>
        {location.pathname !== "/"
          && location.pathname !== "/login"
          && location.pathname !== "/formcomercio"
          && location.pathname !== "/formuser"
          && location.pathname !== "/userlogin"
          && location.pathname !== "/mas18"
          && location.pathname !== "/mas18/dashboard"
          && <NavBar />}


        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/mas18' element={<LoginAdmin />} />
          <Route path='/mas18/dashboard' element={<DashboardAdmin />} />
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
        </Routes>
      </CartProvider>

      
    </div>
  );
}

export default App;
