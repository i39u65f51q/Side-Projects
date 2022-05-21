import { useState } from 'react';

import './App.css';
import { data } from './data';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  const [content, setContent] = useState(data);
  const [index, setIndex] = useState(0);

  function getIndex(index) {
    setIndex(function (prev) {
      return (prev = index);
    });
  }

  return (
    <main className="m-5">
      <Navbar content={content} id={index} getIndex={getIndex} />
      <Content content={content} index={index} />
    </main>
  );
}
export default App;
