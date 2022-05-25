import { useState, useTransition, useId } from 'react';

const Transition = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const id = useId();
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    setValue(e.target.value);
    startTransition(() => {
      const arr = [];
      for (let i = 0; i < 20000; i++) {
        arr.push(e.target.value);
      }
      setList(arr);
    });
  }

  return (
    <div>
      <h2>useTransition Demo</h2>
      <label htmlFor={id}>Text:</label>
      <input id={id} type="text" value={value} onChange={handleChange} />
      <div>
        {isPending
          ? 'Loading...'
          : list.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  );
};
export default Transition;
