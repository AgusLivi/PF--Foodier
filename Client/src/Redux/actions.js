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

export const getProductByName = search => {
    return async dispatch => {
        try {
            const { data } = await axios(`${endPoint}/products/?name=${search}`) //en name tengo que cambiar por la ruta del back
         
            return dispatch({
                type: SEARCH_BY_NAME,
                payload: data,
            })

        } catch (error){
            alert(error.message)
        }
    }
}

export const createProduct = (formData)=>{
    return async (dispatch)=>{
        try{
            const { data } = await axios.post(`http://localhost:3001/products/${id}`, formData); // despues de la barra tengo que poner la ruta que definieron en el back
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
        const { data } = await axios.post(`${endPoint}/add-favorites`, dataForm)
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
            const { data } = await axios.post(`${endPoint}/login`, userData)
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
            const { data } = await axios.post(`${endPoint}/get-favorites/${id}`)
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
            const { data } = await axios.post(`${endPoint}/create-payment`, pay)
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
            const { data } = await axios.post(`${endPoint}/post`, post)
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
    return async(dispatch) => {
        try{
            const { data } = await axios.get(`${endPoint}/categories`)
            return dispatch({
                type: CATEGORIES,
                payload: data
            })
        }catch(error) {
            alert(error.message)
        }
    }
}

export const addressFilter = () => {
    return async(dispatch) => {
        try{
            const { data } = await axios.get(`${endPoint}/adress`)
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
            const { data } = await axios.get(`${endPoint}/average_rating`)
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
export const orderBy = () => {
    return async(dispatch) => {
        try{
            const { data } = await axios.get(`${endPoint}/products/orderBy`)
            return dispatch ({
                type: ORDER_BY,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }

}

export const orderUpDown = () => {
    return async(dispatch) => {
        try{
            const { data } = await axios.get(`${endPoint}/products/order`)
            return dispatch({
                type: ORDER,
                payload: data
            })
         } catch (error) {
            alert(error.message)
         }
    }
}

export const currentPage = () => {
    return async(dispatch)=>{
        try {
            const { data } = await axios.get(`${endPoint}/products/page`)
            return dispatch({
                type: PAGE,
                payload: data
            })
        } catch(error) {
            alert (error.message)
        }
    }
}

export const pageSize = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endPoint}/products/pageSize`)
            return dispatch ({
                type: PAGE_SIZE,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}