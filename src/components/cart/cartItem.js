import React from 'react';
import { useCart } from '../../context/cartContext';

function CartItem() {
  const { cart, setCart } = useCart();

  return (
    <div>
      {cart.map(({ name, price, image }, i) => (
        <div key={i} className="">
          <h1>Name is {name}</h1>
          <h2>Price is {price}</h2>
          <img className="h-20 w-20" src={image}></img>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
