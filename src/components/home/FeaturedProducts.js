import { useState, useEffect } from 'react';
import SingleProduct from '../products/singleProduct';
import { useProduct } from '../../context/productContext';

function FeaturedProducts() {
  const { products, setProducts } = useProduct();
  return (
    <div className="grid grid-col-1 gap-4 lg:grid-cols-3">
      {products.slice(0, 3).map((item, i) => (
        <div key={i} className="">
          <SingleProduct {...item} />
        </div>
      ))}
    </div>
  );
}

export default FeaturedProducts;
