import { useState } from 'react';
import './App.css';

function App() {
  const [showNav, setShowNav] = useState(false);

  console.log(showNav);
  return (
    <nav className="flex bg-slate-400 h-10 items-center px-5 relative">
      <h1 className="flex-1 text-center">Hello Marketing!</h1>
      <ul className="flex gap-5 opacity-0 md:opacity-100">
        <li>Promotion</li>
        <li>People</li>
        <li>Price</li>
        <li>Product</li>
        <li>Place</li>
      </ul>
      <ul
        className={`flex gap-5  duration-700 ease overflow-hidden ${
          showNav ? 'w-full' : 'w-0'
        } 
         flex-col absolute right-0 bg-slate-400 top-10 border-2`}
      >
        <li>Promotion</li>
        <li>People</li>
        <li>Price</li>
        <li>Product</li>
        <li>Place</li>
      </ul>

      <button
        onClick={() => setShowNav(!showNav)}
        className="text-white absolute right-5 opacity-100 pointer-events-auto md:pointer-events-none  md:opacity-0"
      >
        Hi
      </button>
    </nav>
  );
}

export default App;
