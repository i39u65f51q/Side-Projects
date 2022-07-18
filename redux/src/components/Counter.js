import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../redux/CounterSlice';

import CounterChild from './counterChild';

import { useCallback, useState } from 'react';

const Counter = () => {
  console.log('Counter:Start');

  const [num, setNum] = useState('123');

  const counterSlice = useSelector(state => state.counter);

  const dispatch = useDispatch();

  // const test = useCallback(() => {
  //   console.log('test prop');
  // }, []);
  const test = () => {
    console.log('test prop');
  };
  const { counter, toggleTheme } = counterSlice;

  const reSetCounter = () => {
    const newCounter = { counter: 0, toggleTheme: !toggleTheme };

    dispatch(counterActions.reSet(newCounter));
    console.log(dispatch);
  };
  console.log('Counter:End');
  return (
    <div>
      <div
        className={`flex justify-center ${
          toggleTheme ? 'text-red-500' : 'text-green-500'
        }`}
      >
        {counter}
      </div>
      <div className="flex w-full justify-center gap-5">
        <button onClick={() => dispatch(counterActions.increase(1))}>+</button>
        <button
          onClick={() => dispatch(counterActions.decrease({ amount: 2 }))}
        >
          -
        </button>
        <button onClick={reSetCounter}>Reset</button>
      </div>
      {/* <CounterChild test={test} /> */}
      <CounterChild num={num} />
    </div>
  );
};
export default Counter;
