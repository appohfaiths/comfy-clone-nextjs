import React from 'react';
import PrimaryLayout from '../../components/layouts/primaryLayout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import heroImage from '../../assets/images/hero-image.jpeg';
// when search is clicked, pass product id
//pass context here to get product details by id
// for product where id is id. name = product. name

function index({ name, price, image, company, details }) {
  const router = useRouter();
  const query = router.query;

  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center mt-20 lg:grid-cols-2">
      <div className="">
        <Image src={heroImage} height={500} width={500} />
      </div>
      <div className="">
        <h1>Product Name</h1>
        <h4>Company</h4>
        <h4>Price</h4>
        <div className="">Colours</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          natus ducimus consectetur eos perferendis facilis porro minima iusto
          ad sunt?
        </p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default index;

index.getLayout = function getLayout(index) {
  return <PrimaryLayout>{index}</PrimaryLayout>;
};
