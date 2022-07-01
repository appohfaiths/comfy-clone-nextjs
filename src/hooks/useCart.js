import { useState } from 'react';

function useCart() {
  const [cart, setCart] = useState([]);

  function addToCart() {}
  function removeFromCart() {}

  return [cart, setCart, addToCart, removeFromCart];
}

export default useCart;
