import axios from 'axios';
import {
	GET_ALL_PRODUCTS,
 	SEARCH_BY_NAME,
 	SEARCH_SELLER_BY_ID,
 	CREATE_PRODUCT,
 	GET_ALL_FAV,
} from './actionsType'

const endPoint='http://localhost:3001/'  //definir rutas del back

export const getAllProducts= () => {
    return async dispatch => {
        try {
            const { data } = await axios(endPoint)
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
            const { data } = await axios(`${endPoint}/?name=${search}`) //en name tengo que cambiar por la ruta del back
         
            return dispatch({
                type: SEARCH_BY_NAME,
                payload: data,
            })

        } catch (error){
            alert('No se encontraron razas con ese nombre')
        }
    }
}

export const createProduct = (formData)=>{
    return async (dispatch)=>{
        try{
            const { data } = await axios.post('http://localhost:3001/', formData); // despues de la barra tengo que poner la ruta que definieron en el back
            return dispatch({
                type: CREATE_PRODUCT,
                payload: data
            })
        }catch (error){
            console.error('Error al crear raza de perro')
        }
       
    }
}

export const getAllFav = () => {
    return async dispatch => {
        try {
            const { data } = await axios(endPoint) //definir despues como pusieron la ruta en el back
            return dispatch({
                type: GET_ALL_FAV,
                payload: data
            })
        } catch (error){
            alert(error.message)
        }
    }
}

export const getSellerById = (id) => {
	return async (dispatch) => {
	try {
	  const { data } = await axios.get(`http://localhost:3001/${id}`) //definir las rutas del back
 	  return dispatch({ 
			type: SEARCH_SELLER_BY_ID,
	 		payload: data 
		})
	} catch (error) {
	  alert(error.message)
	}
  }
}
