import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store.js'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast';

//defino la baseURL de axios con la url del servidor en una variable de entorno
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
axios.defaults.baseURL = apiUrl;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>  
  </Provider>
)
