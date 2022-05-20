import { useState } from 'react';
import './index.css';

import { people } from './data';
import Header from './components/Header';
import List from './components/List';
import Clear from './components/Clear';

function App() {
  const [data, setData] = useState(people);
  return (
    <div className="border-2 w-1/3 p-2 flex flex-col items-center bg-slate-400 ">
      <Header data={data} />
      <List data={data} />
      <Clear clearAll={setData} />
    </div>
  );
}

export default App;
