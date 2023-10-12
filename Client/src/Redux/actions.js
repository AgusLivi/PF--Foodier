import axios from "axios";

import {
  //product actionTypes:
  GET_PRODUCTS,
  SEARCH_BY_ID,
  CLEAN_DETAIL,
  GET_SIMILAR_PRODUCTS,

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
  POST_FAVORITES,
  GET_ALL_FAV,

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

// const  = 'http://localhost:3001'  //definir rutas del back

export const getAllFav = (id) => {
  //en realidad obtiene el fav del usuario
  return async (dispatch) => {
    try {
      const { data } = await axios(`/favorites/${id}`); //definir despues como pusieron la ruta en el back
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
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/favorites`, dataForm);
      return dispatch({
        type: POST_FAVORITES,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getSellerFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/favorites/${id}`);
      return dispatch({
        type: GET_SELLER_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

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

export const updateUser = (id, updatedUserData) => {
  return async () => {
    try {
      const { data } = await axios.put(`/users/${id}`, updatedUserData);
      alert(`Usuario ${data.name} actualizado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

export const deleteUser = (id) => {
  return async () => {
    try {
      const { data } = await axios.delete(`/users/${id}`); //definir las rutas del back
      alert(`Usuario ${data.name} borrado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getAllUser = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/users`);
      return dispatch({
        type: GET_ALL_USER,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/users/${id}`);
      return dispatch({
        type: GET_USER_BY_ID,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const createSeller = (sellerData) => {
  console.log(sellerData);
  return async () => {
    try {
      const { data } = await axios.post(`/sellers`, sellerData);
      alert(`vendedor ${data.name} creado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

export const updateSeller = (id, updatedSellerData) => {
  return async () => {
    try {
      const { data } = await axios.put(`/sellers/${id}`, updatedSellerData);
      alert(`vendedor ${data.name} actualizado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

export const deleteSeller = (id) => {
  return async () => {
    try {
      const { data } = await axios.delete(`/sellers/${id}`); //definir las rutas del back
      alert(`vendedor ${data.name} borrado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getAllSeller = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/sellers`);
      return dispatch({
        type: GET_ALL_SELLERS,
        payload: data,
      });
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

//Products acctions

export const getProducts = (querys) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/products/?${querys}`);

    console.log("ACTION!!!", querys);

    return dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/products/${id}`); //definir las rutas del back
      alert(`${data.name} fue borrado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getProductById = (product_ID) => {
  return async function (dispatch) {
    console.log("Fetching product by ID:", product_ID);
    const { data } = await axios(`/products/${product_ID}`);
    return dispatch({
      type: SEARCH_BY_ID,
      payload: data,
    });
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};

export const createProduct = (formmData, id) => {
  console.log("form data: ", formmData.categories);
  return async () => {
    try {
      const { data } = await axios.post(`/products/${id}`, formmData); // despues de la barra tengo que poner la ruta que definieron en el back
      alert(`${data.name} fue creado correctamente`);
    } catch (error) {
      alert('Hubo un error', error.message);
    }
  };
};

export const getSimilarProducts = (product_ID, categories) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/products/similar/${product_ID}`, {
        params: { categories },
      });
      dispatch({
        type: GET_SIMILAR_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener productos similares:", error);
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
      alert(`Usuario ${data.name} creado correctamente`);
    } catch (error) {
      alert(error.message);
    }
  };
};

//login
export const login = (formData) => {
  console.log(formData);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/login`, formData);
      console.log(data);
      const { token, error } = data;

      // Si se recibe un token, puedes almacenarlo en el estado global o en el almacenamiento local
      // para mantener al usuario autenticado
      if (token) {
        dispatch(setAuthToken(token));
        dispatch(loginSuccess(formData));
      } else {
        // Maneja errores de inicio de sesión específicos
        if (error === "InvalidPassword") {
          alert("Contraseña incorrecta");
        } else if (error === "UserNotFound") {
          alert("Usuario no encontrado");
        } else {
          alert("Error desconocido en el inicio de sesión");
        }
      }

      alert(`Inicio de sesión exitoso ${data}`);
    } catch (error) {
      alert("Error al iniciar sesión" + error.message);
    }
  };
};
const setAuthToken = (token) => {
  console.log("esdto es el token", token);
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
      // baseURL: "https://foodier-back-deploy.onrender.com",
      // headers: {
      //   common: {
      //     Origin: "https://foodier.onrender.com", // Asegúrate de que coincida con tu origen
      //   },
      // },
      withCredentials: true, // Habilita el envio de cookies 🍪
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(`/payments`, paymentData, axiosConfig);

    console.log("Respuesta de la solicitud de pago:", response);

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
