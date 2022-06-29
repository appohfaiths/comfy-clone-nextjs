import { useState, createContext, useContext } from 'react';
import products from '../../public/json/products';

const ProductsContext = createContext({});

export default function ProductsContextProvider({ children }) {
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProduct = () => useContext(ProductsContext);
