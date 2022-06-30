import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cart from '../cart/cart';
import { FaBars } from 'react-icons/fa';
import blackLogo from '../../assets/images/logos/logo-black.svg';

function LayoutNavbar() {
  return (
    <>
      <div className="flex items-center justify-around">
        <div className="hidden md:block">
          <ul className="flex gap-4">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/products">
              <a>Products</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </ul>
        </div>
        <div className="block md:hidden bg-orange-500 p-1 rounded-xl">
          <FaBars color="white" size={25} className="cursor-pointer" />
        </div>
        <div className="">
          <Image src={blackLogo} alt="comfy logo" width={100} height={50} />
        </div>
        <div className="">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default LayoutNavbar;
