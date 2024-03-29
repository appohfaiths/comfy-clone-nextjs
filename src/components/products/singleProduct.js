import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/cartContext';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

function SingleProduct({ name, price, image, id }) {
  const { show, setShow } = useCart();
  const { count, setCount } = useCart();
  const { cart, setCart } = useCart();

  function handleClick() {
    setCount((prevcount) => prevcount + 1);
    setShow(!show);
    setCart((cart) => [...cart, { name, price, image }]);
  }

  function handleSearchClick() {}

  function displayProduct() {}

  return (
    <div>
      <div className="relative group">
        <div className="">
          <img className="h-[15rem] w-full" src={image}></img>
        </div>
        <div className=" absolute top-32 left-36 grid grid-cols-2 gap-4 align-middle">
          <button className="hidden group-hover:block bg-orange-700 p-2 rounded-3xl">
            <Link
              href={{
                pathname: '/products/[productid]',
                query: { productid: id },
              }}
            >
              <a onClick={handleSearchClick}>
                <FaSearch color="white" size={20} />
              </a>
            </Link>
          </button>
          <button
            className="hidden group-hover:block bg-orange-700 p-2 rounded-3xl"
            onClick={handleClick}
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
