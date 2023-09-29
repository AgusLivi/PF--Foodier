import {
    GET_ALL_PRODUCTS,
    SEARCH_BY_NAME,
    SEARCH_BY_ID,
    CREATE_PRODUCT,
    GET_ALL_FAV,
    GET_FILTER,
    DELETE_PRODUCT
} from './actionsType'

const initialState = { 
    products: [],
    productsCopy: [],
    createdProduct: [],
    sellersFav:[],
    productsByName: [],
    filtereds: []
}

const reducer = (state = initialState, {type, payload}) => {
   let filteredProducts = []

    switch(type){
        case GET_ALL_PRODUCTS:
            case GET_ALL_PRODUCTS:
                return {
                    ...state,
                    products: payload,
                    productsCopy: payload,
                    productsByName: payload
                }

            case SEARCH_BY_NAME:
                return {
                    ...state,
                    products: filteredProducts,
                    productsByName: filteredProducts,
                }

            case CREATE_PRODUCT: 
                return {
                    ...state,
                    createdProduct: [...state.createdProduct, payload]
                }
            case SEARCH_SELLER_BY_ID:
                return {
                    ...state,
                    products: payload,
                }
            case GET_ALL_FAV: 
                return {
                    ...state,
                    sellersFav: payload,
                }
            case GET_FILTER:
                return {
                    ...state,
                    filtereds: payload
                }
            case DELETE_PRODUCT: 
                return {
                    ...state,
                    products: payload,
                    productsCopy: payload
                }
            default:
                return state;
    }





}