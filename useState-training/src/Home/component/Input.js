import { useState } from 'react';
//Icons
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Input = ({ add }) => {
  function addItem() {
    if (value == false) return;
    add(function (prev) {
      console.log([...prev, value]);
      return [...prev, { todo: value, id: Math.random() }];
    });
    setValue('');
  }
  function getInputValue(e) {
    setValue(function (prev) {
      return (prev = e.target.value);
    });
  }
  const [value, setValue] = useState('');

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={value}
        onChange={getInputValue}
        className="border-2 border-slate-500 w-auto flex-1 p-1"
      />
      <button
        onClick={addItem}
        className="flex items-center ml-1 border-slate-500 border-2 p-1 hover:bg-slate-600 hover:text-white text-2xl"
      >
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
};

export default Input;
