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
    } from './actionsType';

    const initialState = { 
        products: [],
        productsCopy: [],
        createdProduct: [],
        sellersFav: [],
        productsByName: [],
        postedFiltereds: [],
        createdUser: [],
        selectedCategories: [],
        selectedOrderBy: [],
        selectedOrder: [],
        createdPost: [],
        createPayment: [],
        averageRating: [],
        address: [],
        //tengo q agregar mas
    };

    const reducer = (state = initialState, { type, payload }) => {

        switch (type) {
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
                    productsByName: payload, // Actualizar solo la propiedad productsByName
                };

            case CREATE_PRODUCT:
                return {
                    ...state,
                    createdProduct: [...state.createdProduct, payload],
                };

            case SEARCH_BY_ID:
                return {
                    ...state,
                    products: payload,
                };

            case GET_ALL_FAV:
                return {
                    ...state,
                    sellersFav: payload,
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
                    createdUser: payload,
                }

            case GET_SELLER_FAV: 
                return {
                    ...state,
                    sellersFav: payload
                }
            case CATEGORIES:
                return {
                    ...state,


                }

            case ADDRESS:
                return {
                    ...state
                }

                

            default:
                return state;
        }
    };

    export default reducer;