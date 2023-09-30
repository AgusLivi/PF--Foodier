import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import {
    getAllProducts,
    postFav,
    categoriesFilter,
    addressFilter,
    average_rating,
    orderBy,
    orderUpDown,
    selectedCategories
} from '../Redux/actions'
const homeHandler = () => {
    //estados globales
    const selectedCategories = useSelector(state => state.selectedCategories)
    


 
    
    return {

    }
}

export default homeHandler