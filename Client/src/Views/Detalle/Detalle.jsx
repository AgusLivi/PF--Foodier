import React from 'react'


const Detalle = ({ name, description, price, old_price, image, amount, date, product_ID, rating, categories }) => {
  return (
    <div key={product_ID}>
      <h2>{name}</h2>
      <p>{rating}</p>
      <h1>Descripcion:</h1>
      <p>{description}</p>
      <p>{date}</p>
      {/* <p>
        {categories.length ? categories.map((item, index) => (
          <span key={index}>{item}</span>
        )).join(', ') : 'Sin categoria'}
      </p> */}
      <p>Old Price: {old_price}</p>
      <p>Price : {price}</p>
      <button>-</button>
      <p>{amount}</p>
      <button>+</button>
      <img src={image} alt={name}/>
      <button>Añadir al carrito</button>
      <button>Pagar</button>
    </div>



  )
}

export default Detalle