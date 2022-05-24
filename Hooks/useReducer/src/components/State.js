import { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">useState</h2>
      <div className="flex gap-5">
        <button onClick={() => setCount(count + 1)}>+</button>
        <span className="text-red-500">{count}</span>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};
export default State;
