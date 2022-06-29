import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

function SingleProduct({ name, price, image }) {
  function addToCart({ name, price, image }) {
    console.log(name, price, image);
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
            <Link href="/productDetails">
              <a>
                <FaSearch color="white" size={20} />
              </a>
            </Link>
          </button>
          <button
            className="hidden group-hover:block bg-orange-700 p-2 rounded-3xl"
            onClick={() => {
              addToCart({ name, price, image });
            }}
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
