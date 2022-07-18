import './App.css';
import Counter from './components/Counter';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  console.log('APP:Start');
  const counter = useSelector(state => state.counter);

  useEffect(() => {
    console.log('Effect: Run');

    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://react-db-c2f96-default-rtdb.firebaseio.com/.',
          {
            method: 'PUT',
            body: JSON.stringify(counter),
          }
        );

        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [counter]);

  console.log('APP:End');
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
