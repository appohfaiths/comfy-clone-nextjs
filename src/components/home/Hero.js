import React from 'react';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import heroImage from '../../assets/images/hero-image.jpeg';

function Hero() {
  return (
    <div className="">
      <div className="w-[100vw] h-[90vh] bg-hero-image bg-no-repeat bg-cover bg-center object-cover">
        {/* <Image
          src={heroImage}
          layout={'fill'}
          objectFit={'cover'}
          objectPosition={'center'}
          alt="Hero-image"
          priority="true"
        /> */}
      </div>

      <div className="flex flex-col gap-2 w-[70%] container mx-auto">
        <h1 className="text-[3rem] font-extrabold font-kaushan">
          Rest, Relax, Unwind
        </h1>
        <h3 className="">Embrace your choices - we do</h3>
        <Link href="/products">
          <a className="outline outline-1 outline-blue-300 rounded-sm w-32 p-0.5 uppercase text-md text-center hover:bg-white hover:text-orange-500">
            Show now
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
