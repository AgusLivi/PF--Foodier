import React from 'react';
import Card from '../Card/card'; 

const CardContainer = ({ CardContainer, onAddToCart }) => {
    return (
        <div>
            {CardContainer.map((card) => (
                <card
                    key={card.product_ID}
                    Product_ID={card.product_ID}
                    Fecha={card.date}
                    Nombre={card.name}
                    Descripcion={card.description}
                    Precio={card.price}
                    Imagen={card.image}
                    Cantidad={card.amount}
                    Categoria={card.categories}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}

export default CardContainer;
