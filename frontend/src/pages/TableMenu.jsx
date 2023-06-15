import React from 'react';
import TableHeader from '../components/TableHeader';
import TableMenuCategories from '../components/TableMenuCategories';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../helpers/AllProducts';

export default function TableMenu() {
  return (
    <div>
      <TableHeader />
      <TableMenuCategories />
      {
        allProducts
          // .filter(product => (
          //   product.type === 'Comidas'
          // ))
          .map(product => (
            <ProductCard
              product={ product }
            />
            )
          )
      }
    </div>
  )
};
