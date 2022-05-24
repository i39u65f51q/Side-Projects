import State from './components/State';
import Reducer from './components/Reducer';
import Todo from './components/Todo';

import './App.css';

function App() {
  return (
    <div className="m-5">
      <State />
      <Reducer />
      <Todo />
    </div>
  );
}

export default App;
