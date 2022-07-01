import { useState } from 'react';
import { useProduct } from '../../context/productContext';

function Sidebar({}) {
  const { products, setProducts } = useProduct();
  const [searchTerm, setSearchTerm] = useState('');
  const [price, setPrice] = useState(50);
  const [filterby, setFilterby] = useState('');

  function search() {
    setProducts(
      products.filter((product) =>
        product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
  }

  function handleClickAll() {
    setProducts(products.filter((product) => product.id > 0));
  }

  function handleClick(e) {
    let word = e.target.innerHTML.toLowerCase();
    setProducts(
      products.filter((product) =>
        product.company.toLowerCase().includes(word.toLowerCase())
      )
    );
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
            onChange={(e) => {
              setSearchTerm(e.target.value), search();
            }}
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
