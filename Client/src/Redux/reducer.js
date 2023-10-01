
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
    SELECTED_CATEGORIES,
} from './actionsType'



    const initialState = { 
        products: [],
        productsCopy: [],
        createdProduct: [],
        sellersFav: [],
        productsByName: [],
        postedFiltereds: [],
        createdUser: [],
        s: [],
        selectedOrderBy: [],
        selectedOrder: [],
        createdPost: [],
        createPayment: [],
        averageRating: [],
        address: [],
        users: [],
        getUserById: [],
        sellers: [],
        getSellerById: [],
        categories: [],
        paymentMethods: [],
        post: [],
        allFavoritesSeller: [],
        createdUser: [],
        createdSellers: [],
        //tengo q agregar mas
    };

    const reducer = (state = initialState, { type, payload }) => {
        let filteredProducts = []
        let orderBy = []

    switch(type){


            case GET_ALL_PRODUCTS:
                return {
                    ...state,
                    products: payload,
                    productsCopy: payload,
                    productsByName: payload,
                };

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


            case SEARCH_BY_ID:
                return {
                    ...state,
                    products: payload,
                };
            case DELETE_PRODUCT:
                return {
                    ...state,
                    products: payload,
                    productsCopy: payload,
                };
            case POST_FAVORITES:
                return {
                    ...state,
                    sellersFav: payload,
                }
            case CREATE_USER: 
                return {
                    ...state,
                    createdUser: [...state.createdUser, payload]
                }

            case GET_SELLER_FAV: 
                return {
                    ...state,
                    sellersFav: payload
                }
            case CATEGORIES:
                return {
                    ...state,
                    categories: payload
                }
            case SELECTED_CATEGORIES:
                return {
                    ...state,
                    products: filteredProducts,
                    selectedCategories: filteredProducts

                }

            case ADDRESS:
                return {
                    ...state,
                    address: payload,
                }
            case AVERAGE_RATING:
                return {
                    ...state,
                    averageRating: payload,
                }
            case PAYMENT: 
                return {
                    ...state,
                    paymentMethods: payload
                }
            case ORDER_BY:
                return{
                    ...state,
                    products: orderBy,
                    productsByName: orderBy,
                    productsCopy: orderBy,
                    selectedOrderBy: payload.length
					? [{ value: payload, label: payload }]
					: [],
                }
            case ORDER: 
                return {
                    ...state,
                    selectedOrder: payload,
                    products: filteredProducts,
                    productsByName: filteredProducts
                }
            case CREATE_POST:
                return {
                    ...state,
                    createdPost: [...state.createdPost, payload]
                }
            case CREATE_PAYMENT: 
                return {
                    ...state,
                    createPayment:[...state.createPayment, payload]
                }
            case GET_USER_BY_ID:
                return {
                    ...state,
                    getUserById: payload
                }
            case GET_SELLER_BY_ID:
                return {
                    ...state,
                    getSellerById: payload
                }
            case GET_ALL_SELLERS: 
                return {
                    ...state,
                    sellers: payload
                }
            case GET_ALL_USER:
                return {
                    ...state,
                    users: payload
                }
            case DELETE_USER:
                return {
                    ...state,
                    createdUsers: payload
                }
            case DELETE_SELLER:
                return {
                    ...state,
                    createdSellers: payload
                }
            case UPDATE_SELLER: 
                return {
                    ...state,
                    createdSellers: payload
                }
            case UPDATE_USER: 
                return {
                    ...state,
                    createUser: payload
                }
            case CREATE_SELLER: 
                return {
                    ...state,
                    createdSellers: payload
                }
            case GET_POST:
                return {
                    ...state,
                    post: payload
                }
            case GET_POST_BY_ID:
                return {
                    ...state,
                    post: payload
                }
            case GET_ALL_FAV:
                return {
                    ...state,
                    allFavoritesSeller: payload,
                }
            case PAGE:
                return {
                    ...state,
                    currentPage: payload,
                };
                  
            case PAGE_SIZE:
                return {
                    ...state,
                    pageSize: payload,
                };

            default:
                return state;
        }
    };

    export default reducer;