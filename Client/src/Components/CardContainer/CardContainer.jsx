import React, {useState} from 'react'
import {useSelector} from 'react-redux';

const CardContainer = () => {
const allProducts = useSelector((state) => state.products);
  return (
    <div>
    {allProducts.map((product) => (
        <Card/>
    ))}

    </div>
  )
}

export default CardContainer
