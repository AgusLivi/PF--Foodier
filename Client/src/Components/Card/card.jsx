import React from 'react';

const Card = ({ name, description, price, old_price, image, amount }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Old Price: {old_price}</p>
      <img src={image} alt={name} />
      <p>Amount: {amount}</p>
    </div>
  );
};

export default Card;