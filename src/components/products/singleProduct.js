import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

function SingleProduct(product) {
  const [data, setData] = useState(product);

  //const router = useRouter();

  // const handleSearch = (data) => {
  //   router.push({
  //     pathname: `products/${data.id}`,
  //     query: data,
  //   });
  // };

  function addToCart() {
    console.log('add to cart');
  }

  function displayProduct() {}

  return (
    <div>
      <div className="relative group">
        <div className="">
          <img className="h-[15rem] w-full" src={product.image}></img>
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
            onClick={addToCart}
          >
            <FaShoppingCart color="white" size={20} />
          </button>
        </div>
      </div>
      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
    </div>
  );
}

export default SingleProduct;
