import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="absolute top-0 right-0">
      <div className="">
        <button>
          <FaTimes color="black" size={25} />
        </button>
      </div>
      <div className="">
        <h3>Your Bag</h3>
      </div>
      <div className="">Cart Items</div>
      <div className="">
        <h3>Total : $ 0.00</h3>
      </div>
      <div className="">
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Sidebar;
