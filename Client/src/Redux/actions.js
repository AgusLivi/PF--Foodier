import axios from 'axios';
import {
    CREATE_PRODUCT,
    GET_ALL_FAV,
    DELETE_PRODUCT,
    POST_FAVORITES,
    CREATE_USER,
    GET_SELLER_FAV,
    GET_CATEGORIES,
    CREATE_POST,
    CREATE_PAYMENT,
    GET_USER_BY_ID,
    GET_SELLER_BY_ID,
    GET_ALL_SELLERS,
    DELETE_SELLER,
    UPDATE_SELLER,
    CREATE_SELLER,
    GET_ALL_USER,
    DELETE_USER,
    UPDATE_USER,
    GET_POST_BY_ID,
    GET_POST,
    GET_PRODUCTS,

    GET_PRODUCT_BY_ID,
    MUNICIPIOS,
    PROVINCIAS,
    LOCALIDADES,

   
    SEARCH_BY_ID,
    CLEAN_DETAIL


    //
} from './actionsType'

const endPoint = 'http://localhost:3001'  //definir rutas del back

export const getAllFav = (id) => {
    return async dispatch => {
        try {
            const { data } = await axios(`${endPoint}/get-favorites/${id}`) //definir despues como pusieron la ruta en el back
            return dispatch({
                type: GET_ALL_FAV,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

/*export const getById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/products/${id}`) //definir las rutas del back
            return dispatch({
                type: SEARCH_BY_ID,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
} YA HAY RUTA DE TRAER POR ID*/

export const deleteProduct = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${endPoint}/products/${id}`) //definir las rutas del back
            return dispatch({
                type: DELETE_PRODUCT,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const postFav = (dataForm) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endPoint}/favorites`, dataForm)
            return dispatch({
                type: POST_FAVORITES,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const createUser = (userData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endPoint}/users`, userData)
            return dispatch({
                type: CREATE_USER,
                payload: data,
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getSellerFav = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endPoint}/favorites/${id}`)
            return dispatch({
                type: GET_SELLER_FAV,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const createPayment = (pay) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endPoint}/payments`, pay)
            return dispatch({
                type: CREATE_PAYMENT,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const createPost = (post) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endPoint}/posts`, post)
            return dispatch({
                type: CREATE_POST,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/products/categories`);
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
            const { data } = await axios.get(`${endPoint}/posts`)
            return dispatch({
                type: GET_POST,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getPostById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/posts/${id}`)
            return dispatch({
                type: GET_POST_BY_ID,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const updateUser = (id, updatedUserData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`/users/${id}`, updatedUserData);
            return dispatch({
                type: UPDATE_USER,
                payload: data
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${endPoint}/users/${id}`) //definir las rutas del back
            return dispatch({
                type: DELETE_USER,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getAllUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/users`)
            return dispatch({
                type: GET_ALL_USER,
                payload: data,
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getUserById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/users/${id}`)
            return dispatch({
                type: GET_USER_BY_ID,
                payload: data,
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const createSeller = (sellerData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endPoint}/sellers`, sellerData)
            return dispatch({
                type: CREATE_SELLER,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const updateSeller = (id, updatedSellerData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`/sellers/${id}`, updatedSellerData);
            return dispatch({
                type: UPDATE_SELLER,
                payload: data
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

export const deleteSeller = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${endPoint}/sellers/${id}`) //definir las rutas del back
            return dispatch({
                type: DELETE_SELLER,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getAllSeller = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/sellers`)
            return dispatch({
                type: GET_ALL_SELLERS,
                payload: data,
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getSellerById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/sellers/${id}`)
            return dispatch({
                type: GET_SELLER_BY_ID,
                payload: data,
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

//Products acctions

export const getProducts = (querys) => {
    return async dispatch => {
        const { data } = await axios.get(`${endPoint}/products/?${querys}`)
        console.log('ACTION!!!', data)
        return dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    }
}

export const getProductById = (product_ID) => {
    return async function (dispatch) {
        console.log('Fetching product by ID:', product_ID);
        const productById = await axios(`${endPoint}/products/${product_ID}`)
        return dispatch({
            type: SEARCH_BY_ID,
            payload: productById.data
        })
    }
};

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    }
}

export const createProduct = (formmData, id) => {
    console.log('form data: ', formmData);
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endPoint}/products/${id}`, formmData); // despues de la barra tengo que poner la ruta que definieron en el back
            return dispatch({
                type: CREATE_PRODUCT,
                payload: data
            })
        } catch (error) {
            console.error(error.message)
        }
    }
}

export const locationProvincia = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://apis.datos.gob.ar/georef/api/provincias`);
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
            const { data } = await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provId}&campos=id,nombre&max=100`);
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
            const { data } = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?municipio=${muniId}&campos=id,nombre&max=100`);
            return dispatch({
                type: LOCALIDADES,
                payload: data.localidades,
            });
        } catch (error) {
            alert(error.message);
        }
    };
};