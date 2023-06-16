import React from 'react';
import './styles/productCard.css'

export default function ProductCard({product}) {
  return (
    <div id='product_card'>
      <img class='product_image' src={ product.img } alt={ product.name }/>
      <div class='product_data'>
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
