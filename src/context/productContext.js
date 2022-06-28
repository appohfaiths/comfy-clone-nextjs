import { useState, createContext } from 'react';
import products from '../../public/json/products';

export const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [product, setProduct] = useState(products);

  return (
    <ProductsContext.Provider value={product}>
      {children}
    </ProductsContext.Provider>
  );
}
