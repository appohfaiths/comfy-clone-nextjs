import React from 'react';
import data from '../../../public/json/products';
import SingleProduct from './singleProduct';

function Products() {
  return (
    <div className="grid grid-col-1 gap-4 lg:grid-cols-3">
      {data.map((item, i) => (
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

export default Products;
