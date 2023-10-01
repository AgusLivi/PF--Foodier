import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import CardContainer from '../../Components/CardContainer/CardContainer.jsx'
import {
    categoriesFilter,
    selectedCategories,
    getProductByName,
    orderByp,
    orderUpDown,
} from '../../Redux/actions'

const Home = () => {
   // global state 
    const categories = useSelector(state => state.categories)
    const products = useSelector(state => state.products)
    const [reset, useReset] = useState(false)
   
    const [productName, setProductName] = useState('');
    const [orderByy, setOrderByy] = useState('')
    const [orderr, setOrderr] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(categoriesFilter())
    }, [reset])
    console.log(categories)


    const [formData, setFormData] = useState({
        name: '',
        categories: [],
        address: '',
        average_rating: '',
        payment: '',
        orderBy: 'name',
        order: 'asc'
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleCategoryChange = (event) => {
        const { name, checked } = event.target;
        const { categories } = formData;
    
        if (checked) {
          setFormData({ ...formData, categories: [...categories, name] });
        } else {
          setFormData({ ...formData, categories: categories.filter((item) => item !== name) });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { categories, address, average_rating, payment, orderBy, order } = formData;
    
        // generamos la cadena de consulta
        const queryParams = new URLSearchParams({
            name: productName, // Usa productName en lugar de formData.name
            categories: categories.join(','),
            address,
            average_rating,
            payment,
            orderBy: orderByy,
            order: orderr
        }).toString();
        console.log(queryParams);
    
        // hacer dispatch con la cadena de consulta
        dispatch(selectedCategories(queryParams));
        dispatch(getProductByName({ name: productName })); // Usa productName en lugar de formData.name
        dispatch(orderByp({orderBy: orderByy}))
        dispatch(orderUpDown({order: orderr}))
    };


    return (
        <div>
    
    <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre del producto"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
        
                {/* mapeo categorías en checkboxes */}
                {categories.map((categoryItem) => (
                    <label>
                    <input
                        type="checkbox"
                        name={categoryItem}
                        checked={formData.categories.includes(categoryItem)}
                        onChange={handleCategoryChange}
                        value={categoryItem}
                    /> {categoryItem}
                    </label>
                ))}
        
                <input
                    type="text"
                    name="address"
                    placeholder="Ubicación"
                    value={formData.address}
                    onChange={handleInputChange}
                />
        
                    <select
                        name="average_rating"
                        value={formData.average_rating}
                        onChange={handleInputChange}
                        >
                        <option value="">Todos</option>
                        <option value="5">5 estrellas</option>
                        <option value="4">4 estrellas</option>
                        <option value="3">3 estrellas</option>
                        <option value="2">2 estrellas</option>
                        <option value="1">1 estrella</option>
                    </select>
        
                    <select
                        name="payment"
                        value={formData.payment}
                        onChange={handleInputChange}
                    >
                        <option value="">Cualquier forma de pago</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Pago Online/Tarjeta">Pago Online/Tarjeta</option>
                    </select>
        
                    <div>
                        <label>Ordenar por:</label>
                        <select
                            name="orderBy"
                            value={orderByy}
                            onChange={(e) => setOrderByy(e.target.value)}
                        >
                            <option value="name">Nombre</option>
                            <option value="price">Precio</option>
                        </select>
                        </div>

                        <div>
                            <label>Orden:</label>
                            <select
                                name="order"
                                value={orderr}
                                onChange={(e) => setOrderr(e.target.value)}
                            >
                                <option value="asc">Ascendente</option>
                                <option value="desc">Descendente</option>
                            </select>
                        </div>
        
                <button type="submit">Filtrar</button>
            </form>

             <CardContainer products={products}/>
        </div>
    )
}
export default Home