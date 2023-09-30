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
    //global state 
    // const selectedCategories = useSelector(state => state.selectedCategories)
    // const orderBy = useSelector(state => state.orderBy)
    // const orderUpDown = use (state => state.selectedOrder)

    // //local state
    // const [selectedOrder, setSelectedOrder] = useState([])
    // const [selectedCat, setSelectedCat] = useState([])
    // const [categoriesError, setCategoriesError] = useState(false)
    // const [orderError, setOrderError] = useState(false)
    // const [reset, setReset] = useState([])
    // const dispatch = useDispatch()

    // useEffect(()=>{
    //     setSelectedCat(selectedCategories)
    //     setSelectedOrder(orderBy)
    // }, [orderError, categoriesError])

    // useEffect (() => {
    //     setReset(false)
    // },[reset])
    
    // //handlers
    // const homeFrom = selected => {
    //     try {
          
    //     }
    // }

    return {



    }
}

export default homeHandler