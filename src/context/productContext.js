import { useState, createContext, useContext } from 'react';
import allproducts from '../../public/json/products';

const ProductsContext = createContext({});

export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState(allproducts);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProduct = () => useContext(ProductsContext);
