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
    CREATE_PAYMENT,
    
    //location actionTypes:
    MUNICIPIOS,
    PROVINCIAS,
    LOCALIDADES,

    
    GET_CATEGORIES,
} from "./actionsType";

const initialState = {
  products: [],
  productsCopy: [],
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
  //tengo q agregar mas
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //pruducts CASEs
    case GET_PRODUCTS:

      return {
        ...state,
        products: payload,
        productsCopy: payload,
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
      };

    case MUNICIPIOS:
      return {
        ...state,
        municipios: payload,
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

    default:
      return state;
  }
};

export default reducer;