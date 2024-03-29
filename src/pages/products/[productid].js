import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useProduct } from '../../context/productContext';
// import products from '../../../public/json/products';
import PrimaryLayout from '../../components/layouts/primaryLayout';

function Product() {
  const { products, setProducts } = useProduct();
  const router = useRouter();
  const query = router.query;
  const id = parseInt(query.productid);
  const item = products[id - 1];

  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center mt-20 lg:grid-cols-2">
      <div className="">
        <img src={item.image} height={500} width={500} />
      </div>
      <div className="">
        {item.name && <h1>{item.name}</h1>}
        {item.company && <h4>BY {item.company}</h4>}
        {item.price && <h4>{item.price}</h4>}
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

export default Product;

Product.getLayout = function getLayout(index) {
  return <PrimaryLayout>{index}</PrimaryLayout>;
};
