import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../redux/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const toggleTheme = useSelector(state => state.counter.toggleTheme);

  const increment = () => {
    dispatch(counterActions.increment(1));
    console.log(counter);
  };

  const decrement = () => {
    dispatch(counterActions.decrement({ amount: 1 }));
    console.log(counter);
  };
  const toggle = () => {
    dispatch(counterActions.toggle());
    console.log(toggleTheme);
  };

  const btnStyle = {
    width: '2rem',
    height: '2rem',
    margin: '0.5rem',
    backgroundColor: toggleTheme ? 'white' : 'black',
    color: toggleTheme ? 'black' : 'white',
  };
  return (
    <main>
      <h1>Redux Test</h1>
      <div>{counter}</div>
      <button style={btnStyle} onClick={increment}>
        +
      </button>
      <button style={btnStyle} onClick={decrement}>
        -
      </button>
      <button style={btnStyle} onClick={toggle}>
        toggle
      </button>
    </main>
  );
};
export default Counter;
