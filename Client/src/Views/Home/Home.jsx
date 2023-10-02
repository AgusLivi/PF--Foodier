import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardContainer from '../../Components/CardContainer/CardContainer.jsx';
import Style from "./Home.module.css";
import {
    categoriesFilter,
    selectedCategories,
} from '../../Redux/actions';

const Home = () => {
    const categories = useSelector(state => state.categories);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    // Estado para el formulario
    const [formData, setFormData] = useState({
        name: '',
        categories: [],
        address: '',
        average_rating: '',
        payment: '',
        orderBy: 'name',
        order: 'asc'
    });

    // Estado adicional para controlar el reinicio
    const [reset, useReset] = useState(false);

    // Efecto para cargar las categorías al montar el componente
    useEffect(() => {
        dispatch(categoriesFilter());
    }, [reset]);

    // Manejar cambios en el formulario
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Manejar cambios en las categorías seleccionadas
    const handleCategoryChange = (event) => {
        const { name, checked } = event.target;
        const { categories } = formData;

        if (checked) {
            setFormData({ ...formData, categories: [...categories, name] });
        } else {
            setFormData({ ...formData, categories: categories.filter((item) => item !== name) });
        }
    };

    // Manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, categories, address, average_rating, payment, orderBy, order } = formData;

        // Generar la cadena de consulta
        const queryParams = new URLSearchParams({
            name,
            categories: categories.join(','),
            address,
            average_rating,
            payment,
            orderBy,
            order,
        }).toString();

        // Hacer dispatch con la cadena de consulta
        dispatch(selectedCategories(queryParams));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre del producto"
                    value={formData.name}
                    onChange={handleInputChange}
                />

                <select name='categories' value={formData.categories} onChange={handleCategoryChange} multiple>
                    <option value="">Categoría</option>
                    {categories.map((categoryItem) => (
                        <option key={categoryItem} value={categoryItem}>
                            {categoryItem}
                        </option>
                    ))}
                </select>

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

                <div className={Style.filtro}>
                    <label>Ordenar por:</label>
                    <select
                        name="orderBy"
                        value={formData.orderBy}
                        onChange={handleInputChange}
                    >
                        <option value="name">Nombre</option>
                        <option value="price">Precio</option>
                    </select>
                </div>

                <div>
                    <label>Orden:</label>
                    <select
                        name="order"
                        value={formData.order}
                        onChange={handleInputChange}
                    >
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </div>

                <button type="submit">Filtrar</button>
            </form>

            <CardContainer products={products} />
        </div>
    );
};

export default Home;
