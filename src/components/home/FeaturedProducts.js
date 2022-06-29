import { useState, useEffect } from 'react';
import SingleProduct from '../products/singleProduct';
import { useProduct } from '../../context/productContext';

function FeaturedProducts() {
  const product = useProduct();

  return (
    <div className="grid grid-col-1 gap-4 lg:grid-cols-3">
      {product.slice(0, 3).map(({ name, price, image }, i) => (
        <div key={i} className="">
          <SingleProduct name={name} price={price} image={image} />
        </div>
      ))}
    </div>
  );
}

export default FeaturedProducts;
