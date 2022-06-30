import { useState, useEffect, createContext, useContext } from 'react';

const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const [cart, setCart] = useState([]);

  const addItem = (item) => {};
  const updateItem = (itemID, amount) => {};
  const removeItem = (itemID) => {};

  useEffect(() => {
    let localCart = localStorage.getItem('cart');

    localCart = JSON.parse(localCart);

    if (localCart) setCart(localCart);
  }, []);

  return (
    <CartContext.Provider
      value={{ show, setShow, count, setCount, cart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
