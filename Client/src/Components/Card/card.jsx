import { Link } from 'react-router-dom';

const Card = ({ 
    // product_ID, date, name, description, price, old_price, categories, image, amount 
}) => {
    // const handleAddToCart = () => {
    //     // Llama a la función onAddToCart con la información del producto
    //     onAddToCart({
    //         product_ID,
    //         date,
    //         name,
    //         description,
    //         price,
    //         old_price,
    //         categories,
    //         image,
    //         amount
    //     });
    // };

    return (
        <div>
            <div>
                {/* <img src={image} alt={name} />
                <h2>{Nombre}</h2>
            </div>
            <div>
                <p>Descripción: {description}</p>
                <p>Precio: {price} USD</p>
                <p>Fecha: {date}</p>
                <p>Cantidad disponible: {amount}</p>
                <p>Categoría: {categories}</p>
                <button onClick={handleAddToCart}>Agregar al carrito</button> */}
            </div>
        </div>
    );
 }

export default Card
