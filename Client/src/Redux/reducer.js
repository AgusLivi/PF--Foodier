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
    GET_POST,

    //Seller actionTypes:
    GET_SELLER_FAV,
    GET_ALL_SELLERS,
    GET_SELLER_BY_ID,
    
    GET_ALL_FAV,
    
    //location actionTypes:
    MUNICIPIOS,
    PROVINCIAS,
    LOCALIDADES,

    //payment actionTypes:
    CREATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_SUCCESS,
    CREATE_PAYMENT_FAILURE,

    
    GET_CATEGORIES,

    //token login
    SET_AUTH_TOKEN,
    LOGIN_SUCCESS,
    VERIFY_TOKEN,
} from "./actionsType";

const initialState = {
  products: [],
  productsAmount: 0,
  productDetail:{},
  sellersFav: [],
  users: [],
  getUserById: [],
  sellers: [],
  getSellerById: [],
  categories: [],
  paymentMethods: [],
  post: [],
  allFavoritesSeller: [],
  provincias: [],
  municipios: [],
  localidades: [],
  userData: null,
  loading: false,
  paymentUrl: null,
  error: null,
  token: null
  //tengo q agregar mas
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //pruducts CASEs
    case GET_PRODUCTS:
      console.log(payload.rows);

      return {
        ...state,
        products: payload.rows,
        productsAmount: payload.count
      };

    case GET_SELLER_FAV:
      return {
        ...state,
        sellersFav: payload,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    case GET_USER_BY_ID:
      console.log("se supone q recibe el id",payload)
      return {
        ...state,
        getUserById: payload,
      };
    case GET_SELLER_BY_ID:
      return {
        ...state,
        getSellerById: payload,
      };
    case GET_ALL_SELLERS:
      return {
        ...state,
        sellers: payload,
      };
    case GET_ALL_USER:
      return {
        ...state,
        users: payload,
      };

    case GET_POST:
      return {
        ...state,
        post: payload,
      };
    case GET_POST_BY_ID:
      return {
        ...state,
        post: payload,
      };
    case GET_ALL_FAV:
      return {
        ...state,
        allFavoritesSeller: payload,
      };
    case PROVINCIAS:
      return {
        ...state,
        provincias: payload,
        localidades: [],
      };

    case MUNICIPIOS:
      return {
        ...state,
        municipios: payload,
        localidades: []
      };

    case LOCALIDADES:
      return {
        ...state,
        localidades: payload,
      };

    case SEARCH_BY_ID:
      return {
        ...state,
        productDetail: payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        productDetail: {},
      };

    case CREATE_PAYMENT_REQUEST:
      return { 
        ...state, 
        loading: true, 
        error: null };

    case CREATE_PAYMENT_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        paymentUrl: payload };

    case CREATE_PAYMENT_FAILURE:
      return { ...state, 
        loading: false, 
        error: payload };
    
    case  SET_AUTH_TOKEN: 
        return {
          ...state,
          token: payload
        }

    // case LOGIN_SUCCESS:
    //       console.log(payload);
    //     return {
    //       ...state,
    //       userData: payload,
    //   };
    case VERIFY_TOKEN: 
    console.log("DATA DE VERIFYYYY",payload);
      return {
        ...state,
        userData: payload
      }
    default:
      return state;
  }
};

export default reducer;