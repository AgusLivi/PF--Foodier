import axios from 'axios';
import {
    CURRENT_PAGE
} from './actionsType'

export const setCurrentPage = page => {
	return dispatch => {
		return dispatch({
			type: CURRENT_PAGE,
			payload: Number(page),
		})
	}
}