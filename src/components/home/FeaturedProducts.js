import { useState, useEffect } from 'react';
import SingleProduct from '../products/singleProduct';
import data from '../../../public/json/products';

function FeaturedProducts() {
  return (
    <div className="grid grid-col-1 gap-4 lg:grid-cols-3">
      {data.slice(0, 3).map(({ name, price, image }, i) => (
        <div key={i} className="">
          <SingleProduct name={name} price={price} image={image} />
        </div>
      ))}
    </div>
  );
}

export default FeaturedProducts;
