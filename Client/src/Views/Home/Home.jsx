import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import CardContainer from '../../Components/CardContainer/CardContainer.jsx'
import {
    categoriesFilter,
    // addressFilter,
    orderBy,
    orderUpDown,
    selectedCategories
} from '../../Redux/actions'

const Home = () => {
   // global state 
    const selectedCategoriess = useSelector(state => state.categories)
    const orderByy = useSelector(state => state.orderBy)
    const orderUp = useSelector (state => state.selectedOrder)
    // const addressFilterr= useSelector(state => state.address)
    const getAllProductss = useSelector(state => state.products)
    const postFav = useSelector(state => state.sellersFav)
    console.log(selectedCategoriess)

        // //local state
  

    const [selectedOrder, setSelectedOrder] = useState([])
    const [selectedCat, setSelectedCat] = useState([])
    const [categoriesError, setCategoriesError] = useState(false)
    const [orderError, setOrderError] = useState(false)
    const [reset, setReset] = useState([])
    const dispatch = useDispatch()

    // const handleOrderByClick = async () => {
    //     try {
    //       // Llama a la acción 'orderBy' utilizando 'dispatch'
    //       await dispatch(orderBy());
    //     } catch (error) {
    //       // Maneja cualquier error que pueda ocurrir en la acción
    //       alert(error.message);
    //     }
    //   }

      const handleOrderUpDownClick = (value) => {
        setSelectedOrder(value); // Actualiza el estado local del selector
        dispatch(orderUpDown(value));
     // Despacha una acción para aplicar el filtro en el estado de Redux
      }
      
      const handlerCategories = (value) => {
        setSelectedCat(value)
        dispatch(categoriesFilter(value))
        console.log(value)
      }

    // useEffect(()=>{
    //     dispatch(selectedCategories())
    //     // setFilterAddress(addressFilter())
    // }, [categoriesError])

    useEffect(()=>{
        setReset(false)
        dispatch(categoriesFilter())
    }, [reset])


    return (
        <div>
    
            <select 
                onChange={(e) => handleOrderUpDownClick(e.target.value)}
                value={selectedOrder}
            >
                <option value="">Selecciona un orden</option>
                <option value="Asc">Ascendente</option>
                <option value="desc">Descendente</option>
       
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
             <CardContainer/>
        </div>
    )
}
export default Home