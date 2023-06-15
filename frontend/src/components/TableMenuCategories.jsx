import React from 'react';
import { productsCategories } from '../helpers/ProductCategories';

export default function TableMenuCategories() {
  const comidas = productsCategories.comidas;
  const bebidas = productsCategories.bebidas;

  return (
    <div>
      <h3>{ comidas.type }</h3>
      { comidas.categories.map(category => (
        <p>{ category.name }</p>
      )) }
      <h3>{ bebidas.type }</h3>
      { bebidas.categories.map(category => (
        <p>{ category.name }</p>
      )) }
    </div>
  )
};
