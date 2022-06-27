import React from 'react';
import Image from 'next/image';

function SingleProduct({ image, name, price }) {
  return (
    <div>
      <img className="h-[15rem] w-full" src={image}></img>
      <h1>{name}</h1>
      <h3>{price}</h3>
    </div>
  );
}

export default SingleProduct;
