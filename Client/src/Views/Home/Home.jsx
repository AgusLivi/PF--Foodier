import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import CardContainer from '../../Components/CardContainer/CardContainer.jsx'
import {
    getAllProducts,
    postFav,
    categoriesFilter,
    addressFilter,
    averageRating,
    orderBy,
    orderUpDown,
    selectedCategories
} from '../../Redux/actions'

const Home = () => {
   // global state 
    const selectedCategoriess = useSelector(state => state.selectedCategories)
    const orderByy = useSelector(state => state.orderBy)
    const orderUp = useSelector (state => state.selectedOrder)
    const addressFilter= useSelector(state => state.address)
    const getAllProductss = useSelector(state => state.products)
    const postFav = useSelector(state => state.sellersFav)

        // //local state
    const [productsAll, setProductsAll] = useState([])
    const [favPost, setFavPost] = useState([])
    const [filterAddress, setFilterAddress] = useState ([])
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

      const handleOrderUpDownClick = (value) => {
        setSelectedOrder(value); // Actualiza el estado local del selector
        dispatch(orderUpDown(value));
     // Despacha una acción para aplicar el filtro en el estado de Redux
      }
      
      const handlerCategories = async () => {
        try {
            await dispatch(selectedCategories())
        } catch (error) {
            alert(error.message)
        }
      }

    useEffect(()=>{
        dispatch(selectedCategories())
        setFilterAddress(addressFilter)
        dispatch(getAllProducts())
    }, [categoriesError])

    useEffect(()=>{
        setReset(false)
    }, [reset])


    return (
        <div>
            <h1>Productos</h1>
            <h1>Aca se renderiza el componente cards</h1>
            <CardContainer/>

            <select 
                onChange={(e) => handleOrderUpDownClick(e.target.value)}
                value={selectedOrder}
            >
                <option value="">Selecciona un orden</option>
                <option value="ini">ini</option>
                <option value="fin">fin</option>
                <option value="Asc">Asc</option>
                <option value="desc">Desc</option>
       
            </select>

            <select
              
                onChange={(e) => handlerCategories(e.target.value)}
                value={selectedCat}
            >
                <option value="">Selecciona una categoria</option>
                {selectedCategoriess.map((categories) => (
                <option key={categories} value={categories}>
                {categories}
                </option>
                ))}

            </select>
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