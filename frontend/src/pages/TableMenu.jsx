import React from 'react';
import TableHeader from '../components/TableHeader';
import TableMenuCategories from '../components/TableMenuCategories';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../helpers/AllProducts';

import './tableMenu.css'

export default function TableMenu() {
  return (
    <div id='container'>
      <TableHeader />
      <div className='all_menu'>
        <TableMenuCategories />
        <div className='all_products'>
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
      </div>
    </div>
  )
};
