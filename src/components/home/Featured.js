import React from 'react';
import Link from 'next/dist/client/link';
import FeaturedProducts from './FeaturedProducts';

function Featured() {
  return (
    <div className="container mx-auto flex flex-col gap-4 items-center">
      <div>
        <h1>
          <span>/</span> Featured
        </h1>
      </div>
      <FeaturedProducts />
      <div className="">
        <Link href="/products">
          <a className="outline outline-1 p-1 rounded-sm bg-[rgb(186,93,44)] text-white">
            All Products
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Featured;
