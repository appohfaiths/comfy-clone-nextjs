import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

function SingleProduct({ image, name, price }) {
  const productName = 'High-back Bench';

  function addToCart() {
    console.log('add to cart');
  }

  function displayProduct() {}

  return (
    <div>
      <div className="relative group">
        <div className="">
          <img className="h-[15rem] w-full" src={image}></img>
        </div>
        <div className=" absolute top-32 left-36 grid grid-cols-2 gap-4 align-middle">
          <button className="hidden group-hover:block bg-orange-700 p-2 rounded-3xl">
            <Link href={{ pathname: '/productDetails', query: productName }}>
              <a>
                <FaSearch color="white" size={20} />
              </a>
            </Link>
          </button>
          <button
            className="hidden group-hover:block bg-orange-700 p-2 rounded-3xl"
            onClick={addToCart}
          >
            <FaShoppingCart color="white" size={20} />
          </button>
        </div>
      </div>
      <h1>{name}</h1>
      <h3>{price}</h3>
    </div>
  );
}

export default SingleProduct;
