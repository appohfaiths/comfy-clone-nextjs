import { useState, useEffect, createContext, useContext } from 'react';

const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('localCart'));
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('localCart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ show, setShow, count, setCount, cart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
