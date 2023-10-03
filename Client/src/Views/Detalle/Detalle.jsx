import React from 'react'

const Detalle = ({ name, description, price, old_price, image, amount, date, product_ID, rating, categories }) => {
  return (
    <div key={product_ID}>
      <h2>{name}</h2>
      <p>{rating}</p>
      <h1>Descripcion:</h1>
      <p>{description}</p>
      <p>{date}</p>
      <p>{categories.length ? categories.map((item) => item).join(', ') : 'Sin categoria'}</p>
      <p className={styles.old_price}>Old Price: {old_price}</p>
      <p className={styles.price}>Price: {price}</p>
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