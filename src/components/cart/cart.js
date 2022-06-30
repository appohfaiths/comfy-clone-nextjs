import { useState } from 'react';
import { useCart } from '../../context/cartContext';
import { FaShoppingCart } from 'react-icons/fa';
import CartMenu from './cartMenu';

function Cart() {
  const { show, setShow } = useCart();
  const { count, setCount } = useCart();

  function handleClick() {
    setShow(!show);
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>
          <FaShoppingCart color="black" size={25} />
        </button>
        <sup>{count}</sup>
      </div>
      {show && <CartMenu />}
    </>
  );
}

export default Cart;
