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

const Home = () => {
   // global state 
    const selectedCategories = useSelector(state => state.selectedCategories)
    const orderBy = useSelector(state => state.orderBy)
    const orderUpDown = useSelector (state => state.selectedOrder)
    const addressFilter= useSelector(state => state.address)
    const getAllProducts = useSelector(state => state.products)
    const postFav = useSelector(state => state.sellersFav)

        // //local state
    const [productsAll, setProductsAll] = useState([])
    const [favPost, setFavPost] = useState([])
    const [filterAddress, setFilterAddress] = useState
    const [selectedOrder, setSelectedOrder] = useState([])
    const [selectedCat, setSelectedCat] = useState([])
    const [categoriesError, setCategoriesError] = useState(false)
    const [orderError, setOrderError] = useState(false)
    const [reset, setReset] = useState([])
    const dispatch = useDispatch()

    const handleOrderByClick = async () => {
        try {
          // Llama a la acción 'orderBy' utilizando 'dispatch'
          await dispatch(orderBy());
        } catch (error) {
          // Maneja cualquier error que pueda ocurrir en la acción
          alert(error.message);
        }
      }

      const handleOrderUpDownClick = async () => {
        try {
          await dispatch(orderUpDown());
        } catch (error) {
          alert(error.message);
        }
      }

    useEffect(()=>{
        setSelectedCat(selectedCategories)
        setFilterAddress(addressFilter)
    }, [categoriesError])

    useEffect(()=>{
        setReset(false)
    }, [reset])


    return (
        <div>
            <h1>Productos</h1>
            <h1>Aca se renderiza el componente cards</h1>
            {/*
                <label htmlFor="sortOrder">Ordenar por:</label>
                 <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
                    <option value="masVendidos">Más Vendidos</option>
                    <option value="menosVendidos">Menos Vendidos</option>
    </select>*/}
             {/* <ul>
                 {sortedProducts.map((product) => (
              <li key={product.id}>
                 {product.name} - Ventas: {product.sales}
              </li>
                 ))}
             </ul> */}
        </div>
    )
}
export default Home