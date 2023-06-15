import React from 'react';

export default function ProductCard({product}) {
  return (
    <div>
      <img src={ product.img } alt={ product.name }/>
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
  )
};
