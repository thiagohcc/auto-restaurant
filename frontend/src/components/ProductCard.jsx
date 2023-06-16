import React from 'react';
import './styles/productCard.css'

export default function ProductCard({product}) {
  return (
    <div id='product_card'>
      <img className='product_image' cl src={ product.img } alt={ product.name }/>
      <div className='product_data'>
        <h2>{ product.name }</h2>
        <h3>{ product.price }</h3>
        <p>{ product.detalhes }</p>
        <label>
          Qtd.:
          <input type="number" />
        </label>
        <button type="button">
          PEDIR
        </button>
      </div>
    </div>
  )
};
