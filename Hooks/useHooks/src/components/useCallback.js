import { useState, useCallback } from 'react';
const Callback = () => {
  const [num, setNum] = useState(0);
  const countNum = useCallback(
    value => {
      return [num * 2 + value];
    },
    [num]
  );
  return (
    <div className="border-2">
      <h2>useCallback Demo</h2>
      <input type="number" value={num} onChange={e => setNum(e.target.value)} />
      <p>{countNum(2)}</p>
    </div>
  );
};
export default Callback;
