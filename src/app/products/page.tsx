import React from 'react'
import { IProduct } from '../../types';
import ProductsWrapper from '../../components/ProductsWrapper';

const Product = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  const data = await response.json();
  const products: IProduct[] = data.products; 


  // console.log(products);
  return (
    <div>
      <ProductsWrapper products={products} />
    </div>
  );
}

export default Product