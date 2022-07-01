import SingleProduct from './singleProduct';
import { useProduct } from '../../context/productContext';

function Products() {
  const product = useProduct();
  const { products, setProducts } = useProduct();
  return (
    <div className="grid grid-col-1 gap-4 lg:grid-cols-3">
      {products.map((item, i) => (
        <div key={i} className="">
          <SingleProduct {...item} />
        </div>
      ))}
    </div>
  );
}

export default Products;
