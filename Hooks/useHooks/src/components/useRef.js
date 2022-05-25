import { useState, useId, useEffect, useRef } from 'react';

const Ref = () => {
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  const id = useId();

  useEffect(() => {
    console.log('list adding');
  }, [list]);

  console.log(list);

  function addData(e) {
    e.preventDefault();
    setList(function (prev) {
      return [...prev, { id: Math.random(), text: data }];
    });
    setData('');
  }

  return (
    <div className="border-2">
      <form action="" onSubmit={addData}>
        <label htmlFor={id + 'text'}>Text:</label>
        <input
          value={data}
          onChange={e => setData(e.target.value)}
          type="text"
          id={id + 'text'}
        />
        <input type="submit" value="add" />
      </form>
      <div>
        {list.map(item => {
          return <div key={item.id}>{item.text}</div>;
        })}
      </div>
    </div>
  );
};
export default Ref;
