import React from 'react';

function RatingStars({ average }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= average) {
      // Si la posición actual es menor o igual al promedio, muestra una estrella llena
      stars.push(<i key={i} className='bx bxs-star'></i>);
    } else if (i - 0.5 === average) {
      // Si la posición actual es igual al promedio menos 0.5, muestra una estrella a la mitad
      stars.push(<i key={i} className='bx bxs-star-half'></i>);
    } else {
      // De lo contrario, muestra una estrella vacía
      stars.push(<i key={i} className='bx bx-star'></i>);
    }
  }

  return (
    <div className="rating-stars">
      {stars}
      <span>({average})</span>
    </div>
  );
}

export default RatingStars;
