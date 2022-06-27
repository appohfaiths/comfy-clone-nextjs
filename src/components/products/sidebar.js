import { useState } from 'react';

function Sidebar({}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [price, setPrice] = useState(50);

  function search() {
    console.log(searchTerm);
  }

  function handleClickAll() {
    search();
  }

  function handleClick({ name }) {
    console.log(name);
  }

  return (
    <div className="flex flex-col items-start gap-6">
      <div className="">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            search();
          }}
        >
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      <div className="flex flex-col items-start gap-3">
        <button onClick={handleClickAll}>All</button>
        <button onClick={handleClick}>Ikea</button>
        <button onClick={handleClick}>Marcos</button>
        <button onClick={handleClick}>Caressa</button>
        <button onClick={handleClick}>Liddy</button>
      </div>
      <div className="">
        <h4>Price</h4>
        <form action="">
          <input
            type="range"
            min={0}
            max={80}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </form>
        <p>Value: ${price}</p>
      </div>
    </div>
  );
}

export default Sidebar;
