import React from 'react';
import Card from './Card'; 

const CardContainer = ({ cards, onAddToCart }) => {
    return (
        <div>
            {cards.map((card) => (
                <Card
                    key={card.Product_ID}
                    Product_ID={card.Product_ID}
                    Fecha={card.Fecha}
                    Nombre={card.Nombre}
                    Descripcion={card.Descripcion}
                    Precio={card.Precio}
                    Imagen={card.Imagen}
                    Cantidad={card.Cantidad}
                    Categoria={card.Categoria}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}

export default CardContainer;
