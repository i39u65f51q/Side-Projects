import { useState, useEffect, useMemo } from 'react';
const Memo = () => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  // const doubleNum = slowHandler(num);

  const memoNum = useMemo(() => {
    return slowHandler(num);
  }, [num]);

  useEffect(() => {
    console.log('theme changing');
  }, [num]);

  function slowHandler(num) {
    for (let i = 0; i < 100000000; i++) {}
    return num * 2;
  }

  return (
    <div className="border-2">
      <h2>useMemo Demo</h2>
      <input
        className="border-2"
        type="number"
        value={num}
        onChange={e => setNum(e.target.value)}
      />
      <button onClick={() => setDark(prev => !prev)}>Theme Changed</button>
      {/* <div className={`${dark ? 'bg-slate-400' : ''}`}>{doubleNum}</div> */}
      <div className={`${dark ? 'bg-red-400' : ''}`}>{memoNum}</div>
    </div>
  );
};
export default Memo;
