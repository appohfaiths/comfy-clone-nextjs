import { useState, useEffect } from 'react';
import SingleProduct from '../products/singleProduct';
import data from '../../../public/json/products';

function FeaturedProducts() {
  return (
    <div className="grid grid-col-1 gap-4 lg:grid-cols-3">
      {data.slice(0, 3).map((item, i) => (
        <div key={i} className="">
          <SingleProduct
            name={item.name}
            price={item.price}
            image={item.image}
          />
        </div>
      ))}
    </div>
  );
}

export default FeaturedProducts;

//filter((item) => item.id == 1)
