import axios from "axios";
import { toast } from 'react-hot-toast';

import {
  //product actionTypes:
  GET_PRODUCTS,
  SEARCH_BY_ID,
  CLEAN_DETAIL,

  //user actionTypes:
  GET_USER_BY_ID,
  GET_ALL_USER,

  //post actionTypes:
  GET_POST_BY_ID,
  CREATE_POST,
  GET_POST,

  //Seller actionTypes:
  GET_SELLER_FAV,
  GET_ALL_SELLERS,
  GET_SELLER_BY_ID,
  CLEAN_DETAIL_SELLER,
  GET_ALL_FAV,
  GET_SELLER_PROFILE,

  //location actionTypes:
  MUNICIPIOS,
  PROVINCIAS,
  LOCALIDADES,

  //payment actionTypes:
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,

  //token autenticacion inicio de sesion
  SET_AUTH_TOKEN,
  LOGIN_SUCCESS,
  GET_CATEGORIES,
} from "./actionsType";

export const createPayment = (pay) => {
  return async () => {
    try {
      const { data } = await axios.post(`/payments`, pay);
      alert(`orden ${data} creado`);
    } catch (error) {
      alert(error.message);
    }
  };
};

//Products acctions

export const getProducts = (querys) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/products/?${querys}`);



    return dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  };
};

export const deleteProduct = (id) => {
  return async () => {
    try {
      const { data } = await axios.delete(`/products/${id}`); //definir las rutas del back
      alert(`${data.name} fue borrado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getProductById = (id) => {
  return async function (dispatch) {

    const { data } = await axios(`/products/${id}`);
    return dispatch({
      type: SEARCH_BY_ID,
      payload: data,
    });
  };
};

export const cleanDetail = () => { // ??
  return {
    type: CLEAN_DETAIL,
  };
};

export const createProduct = (formmData,) => {

  return async () => {
    try {
      const { data } = await axios.post(`/products`, formmData); // despues de la barra tengo que poner la ruta que definieron en el back
      alert(`${data.name} fue creado correctamente`);
    } catch (error) {
      alert('Hubo un error', error.message);
    }
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/products/categories`);
      return dispatch({
        type: GET_CATEGORIES,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

// Location actions

export const locationProvincia = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://apis.datos.gob.ar/georef/api/provincias`
      );
      return dispatch({
        type: PROVINCIAS,
        payload: data.provincias,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const locationMunicipio = (provId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provId}&campos=id,nombre&max=100`
      );
      return dispatch({
        type: MUNICIPIOS,
        payload: data.municipios,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const locationLocalidad = (muniId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://apis.datos.gob.ar/georef/api/localidades?municipio=${muniId}&campos=id,nombre&max=100`
      );
      return dispatch({
        type: LOCALIDADES,
        payload: data.localidades,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

// User actions

export const createUser = (userData) => {
  return async () => {
    try {
      const { data } = await axios.post(`/users`, userData);
     data && toast.success('El usuario se ha creado correctamente.');
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getAllFav = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`/favorites/`); //definir despues como pusieron la ruta en el back
      return dispatch({
        type: GET_ALL_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};


export const postFav = (dataForm) => {
  console.log('id action:', dataForm);
  return async () => {
    try {
      const { data } = await axios.post(`/favorites/`, dataForm);
      data && toast.success('Has agregado el vendedor a tus favoritos.');
    } catch (error) {
      alert(error.message);
    }
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/posts`, post);
      return dispatch({
        type: CREATE_POST,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getAllPost = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/posts`);
      return dispatch({
        type: GET_POST,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getPostById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/posts/${id}`);
      return dispatch({
        type: GET_POST_BY_ID,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const updateUser = (updatedUserData) => {
  return async () => {
    try {
      const { data } = await axios.put(`/users/`, updatedUserData);
      alert(`Usuario ${data.name} actualizado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

export const deleteUser = () => {
  return async () => {
    try {
      const { data } = await axios.delete(`/users/`); //definir las rutas del back
      alert(`Usuario ${data.name} borrado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getUserById = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/users/`, null, axios.defaults.headers = { "token": localStorage.getItem("token") });
      return dispatch({
        type: GET_USER_BY_ID,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

// Sellers actions
export const createSeller = (userData) => {

  return async () => {
    try {
      const { data } = await axios.post(`/sellers`, userData);
      data && toast.success('El vendedor se ha creado correctamente.');
    } catch (error) {
      alert(error.message);
    }
  };
};

export const updateSeller = (updatedSellerData) => {
  return async () => {
    try {
      const { data } = await axios.put(`/sellers/`, updatedSellerData);
      alert(`vendedor ${data.name} actualizado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

export const deleteSeller = () => {
  return async () => {
    try {
      const { data } = await axios.delete(`/sellers/`); //definir las rutas del back
      alert(`vendedor ${data.name} borrado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getSellerById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/sellers/${id}`);
      return dispatch({
        type: GET_SELLER_BY_ID,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const cleanSeller = () => {
  return {
    type: CLEAN_DETAIL_SELLER
  }
};

//login
export const login = (formData) => {

  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/login`, formData);


      localStorage.setItem('rol', formData.rol);


      const { token, error } = data;
      localStorage.setItem("token", token)
      axios.defaults.headers = { "token": localStorage.getItem("token") }
    } catch (error) {
      alert("Error al iniciar sesión" + error.message);
    }
  };
};
const setAuthToken = (token) => {

  return {
    type: SET_AUTH_TOKEN,
    payload: token,
  };
};
//SUCCESS LOGIN
export const loginSuccess = (formData) => ({
  type: LOGIN_SUCCESS,
  payload: formData,
});

//payment actions
export const createPaymentRequest = (paymentData) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_PAYMENT_REQUEST,
    });

    // opciones de CORS para la solicitud
    const axiosConfig = {
      withCredentials: true, // Habilita el envio de cookies 🍪
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(`/payments`, paymentData, axiosConfig);



    dispatch({
      type: CREATE_PAYMENT_SUCCESS,
      payload: response.data.url_pago,
    });
  } catch (error) {
    console.error("Error en la solicitud de pago:", error);
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload: error.message,
    });
  }

};

// Admin actions
export const getAllSeller = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/admin/sellers');
      return dispatch({
        type: GET_ALL_SELLERS,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getAllUser = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/admin/user');
      return dispatch({
        type: GET_ALL_USER,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const banSeller = (id) => {
  return async () => {
    try {
      const { data } = await axios.put(`/admin/seller/${id}`);
      console.log(data);
      alert(data);
    } catch (error) {
      alert(error.message);
    }
  }
};

export const banUser = (id) => {
  return async () => {
    try {
      const { data } = await axios.put(`/admin/user/${id}`);
      console.log(data);
      alert(data);
    } catch (error) {
      alert(error.message);
    }
  }
};

export const enableSeller = (id) => {
  return async () => {
    try {
      const { data } = await axios.put(`/admin/enableSeller/${id}`);
      console.log(data);
      alert(data);
    } catch (error) {
      alert(error.message);
    }
  }
};

export const enableUser = (id) => {
  return async () => {
    try {
      const { data } = await axios.put(`/admin/enableUser/${id}`);
      console.log(data);
      alert(data);
    } catch (error) {
      alert(error.message);
    }
  }
};

export const deleteSellerAdmin = (id) => {
  return async () => {
    try {
      const { data } = await axios.delete(`/admin/sellers/${id}`);
      alert(data);
    } catch (error) {
      alert(error.message);
    }
  }
};

export const deleteUserAdmin = (id) => {
  return async () => {
    try {
      const { data } = await axios.delete(`/admin/user/${id}`);
      alert(data);
    } catch (error) {
      alert(error.message);
    }
  }
};

export const getSellerProfile = () => {

return async (dispatch) => {
  try {
    const { data } = await axios.get(`/sellers/`, null, axios.defaults.headers = { "token": localStorage.getItem("token") });
    return dispatch({
      type: GET_SELLER_PROFILE,
      payload: data,
    });
  } catch (error) {
    alert(error.message);
  }
};
};


