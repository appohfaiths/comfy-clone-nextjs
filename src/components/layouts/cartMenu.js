import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function CartMenu() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-10 bg-[rgba(0,0,0,0.5)]">
      <div className="fixed top-0 right-0 w-[25vw] bg-slate-200  p-10 pl-20 text-black h-full grid grid-rows-[1fr_4fr_1fr] ease-in-out duration-200">
        <div className="absolute top-1 left-2">
          <button onClick={() => setShowCart(!showCart)}>
            <FaTimes color="black" size={25} />
          </button>
        </div>
        <header>
          <div className="">
            <h3>Your Bag</h3>
          </div>
        </header>
        <div className="">Cart Items</div>
        <footer>
          <div className="">
            <h3>Total : $ 0.00</h3>
          </div>
          <div className="">
            <button>Checkout</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CartMenu;
