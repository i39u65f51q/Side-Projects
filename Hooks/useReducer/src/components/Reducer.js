import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // function increment() {
  //   dispatch({ type: 'increment' });
  // }

  // function decrement() {
  //   dispatch({ type: 'decrement' });
  // }

  return (
    <div>
      <h2 className="font-bold text-2xl">useReducer</h2>
      <div className="flex gap-5">
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <p className="text-red-500">{state.count}</p>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </div>
    </div>
  );
};
export default Reducer;
