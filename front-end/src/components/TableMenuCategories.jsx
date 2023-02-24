import React from 'react';
import { productsCategories } from '../helpers/ProductCategories';

export default function TableMenuCategories() {
  const comidas = productsCategories.comidas;
  const bebidas = productsCategories.bebidas;

  return (
    <div>
      <h3>{ comidas.name }</h3>
      { comidas.subCategories.map(subCategory => (
        <p>{ subCategory.name }</p>
      )) }
      <h3>{ bebidas.name }</h3>
      { bebidas.subCategories.map(subCategory => (
        <p>{ subCategory.name }</p>
      )) }
    </div>
  )
};
