import axios from 'axios';
import {
	GET_ALL_PRODUCTS,
 	SEARCH_BY_NAME,
 	SEARCH_BY_ID,
 	CREATE_PRODUCT,
 	GET_ALL_FAV,
    DELETE_PRODUCT,
    POST_FAVORITES,
    CREATE_USER,
    GET_SELLER_FAV,
    CATEGORIES,
    ADDRESS,
    AVERAGE,
    AVERAGE_RATING,
    PAYMENT,
    ORDER_BY,
    ORDER,
    PAGE,
    PAGE_SIZE,
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
    SELECTED_CATEGORIES
} from './actionsType'

const endPoint='http://localhost:3001'  //definir rutas del back

export const getAllProducts= () => {
    return async dispatch => {
        try {
            const { data } = await axios(`${endPoint}/products/`)
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: data
            })	
        } catch (error){
            alert(error.message)
        }
    }
}

export const getProductByName = (formData) => {
    console.log(formData)
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/products?${formData.name}`);
            return dispatch({
                type: SEARCH_BY_NAME,
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    };
};

export const createProduct = (formmData, id)=>{
    console.log('form data: ', formmData);
    return async (dispatch)=>{
        try{
            const { data } = await axios.post(`http://localhost:3001/products/${id}`, formmData); // despues de la barra tengo que poner la ruta que definieron en el back
            return dispatch({
                type: CREATE_PRODUCT,
                payload: data
            })
        }catch (error){
            console.error(error.message)
        }
       
    }
}

export const getAllFav = (id) => {
    return async dispatch => {
        try {
            const { data } = await axios(`${endPoint}/get-favorites/${id}`) //definir despues como pusieron la ruta en el back
            return dispatch({
                type: GET_ALL_FAV,
                payload: data
            })
        } catch (error){
            alert(error.message)
        }
    }
}

export const getById = (id) => {
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
}

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
        } catch(error){
            alert(error.message)
        }
    }
}

export const getSellerFav = (id) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.post(`${endPoint}/favorites/${id}`)
            return dispatch({
                type: GET_SELLER_FAV,
                payload: data
            })
        } catch(error) {
            alert(error.message)
        }
    }
}

export const createPayment = (pay) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.post(`${endPoint}/payments`, pay)
            return dispatch({
                type: CREATE_PAYMENT,
                payload: data
            })
        }catch(error) {
            alert(error.message)
        }
    }
}

export const createPost = (post) => {
    return async(dispatch) => {
        try{
            const { data } = await axios.post(`${endPoint}/posts`, post)
            return dispatch({
                type: CREATE_POST,
                payload: data
            })
        } catch (error){
            alert(error.message)
        }
    }
}

export const categoriesFilter = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/products/categories`);
            return dispatch({
                type: CATEGORIES,
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    };
};

export const addressFilter = (formData) => {
    return async(dispatch) => {
        try{
            const { data } = await axios.get(`${endPoint}/products${formData.address}`)
            return dispatch({
                type: ADDRESS,
                payload: data
            })
        } catch(error) {
            alert(error.message)
        }
    }
}

export const averageRating = () => {
    return async(dispatch) => {
        try{
            const { data } = await axios.get(`${endPoint}/products/average_rating`)
            return dispatch({
                type: AVERAGE_RATING,
                payload: data
            })
        } catch(error) {
            alert(error.message)
        }
    }
}

export const paymentMethods = () => {
    return async(dispatch) => {
        try{
            const { data } = await axios.get(`${endPoint}/products/payment`)
            return dispatch({
                type: PAYMENT,
                payload: data
            })
        } catch(error) {
            alert (error.message)
        }
    }
}
export const orderByp = (formData) => {

   console.log(formData)

    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/products?${formData.orderBy}${formData.order}`);
            return dispatch({
                type: ORDER_BY,
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    };
};

export const orderUpDown = (formData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/products?${formData.orderBy}${formData.order}`);
            return dispatch({
                type: ORDER,
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    };
};

export const currentPage = (formData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/products?${formData.page}${formData.pageSize}`);
            return dispatch({
                type: PAGE,
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    };
};

export const pageSize = (formData) => {
    console.log(formData)
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/products?${formData.page}${formData.pageSize}`);
            return dispatch({
                type: PAGE_SIZE,
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    };
};
export const getAllPost = () => {
    return async(dispatch) => {
        try{
            const { data } = await axios.get(`${endPoint}/posts`)
            return dispatch({
                type: GET_POST,
                payload: data
            })
        } catch (error){
            alert(error.message)
        }
    }
}

export const getPostById = (id) => {
    return async(dispatch) => {
        try{
            const { data } = await axios.get(`${endPoint}/posts/${id}`)
            return dispatch({
                type: GET_POST_BY_ID,
                payload: data
            })
        } catch (error){
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
        } catch(error){
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
        } catch(error){
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
        }catch(error) {
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
        } catch(error){
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
        } catch(error){
            alert(error.message)
        }
    }
}

export const selectedCategories = (categories) => {
    return async dispatch => {
        const { data } = await axios.get(`${endPoint}/products?${categories}`)
        console.log('ACTION!!!', data)
        return dispatch ({
            type: SELECTED_CATEGORIES,
            payload: data
        })
    }
}