import React from 'react';
import PrimaryLayout from '../../components/layouts/primaryLayout';
import Products from '../../components/products/products';
import Sidebar from '../../components/products/sidebar';

function index() {
  return (
    <>
      <div className="mx-20 flex mt-20">
        <Sidebar />
        <Products />
      </div>
    </>
  );
}

export default index;

index.getLayout = function getLayout(index) {
  return <PrimaryLayout>{index}</PrimaryLayout>;
};
