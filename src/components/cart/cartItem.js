import React from 'react';
import { useCart } from '../../context/cartContext';

function CartItem() {
  const { cart, setCart } = useCart();

  return (
    <div>
      {cart.map(({ name, price, image }, i) => (
        <div key={i} className="grid grid-cols-[2fr_4fr_1fr] gap-4">
          <img className="h-20 w-20" src={image}></img>
          <div className="">
            <h1>{name}</h1>
            <h2>{price}</h2>
          </div>
          <div className="">No.</div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
