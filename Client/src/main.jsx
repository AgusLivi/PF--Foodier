import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store.js'
// import axios from 'axios';


// Obtiene el token almacenado en localStorage
// const token = localStorage.getItem('token');

// if (token) {
//   // El token está almacenado en el local storage
//   console.log('Token:', token);
// } else {
//   // No se encontró un token en el local storage
//   console.log('No se encontró un token en el local storage.');
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
