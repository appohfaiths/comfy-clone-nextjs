import React from 'react';
import PrimaryLayout from '../../components/layouts/primaryLayout';

function index() {
  return <div>About Page</div>;
}

export default index;

index.getLayout = function getLayout(index) {
  return <PrimaryLayout>{index}</PrimaryLayout>;
};
