import {
    CURRENT_PAGE
} from './actionsType'

const initialState = { 
    currentPage: 1,
}

const reducer = (state = initialState, {type, payload}) => {

    switch(type){
        case CURRENT_PAGE:
            case CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: payload,
                }
    }





}