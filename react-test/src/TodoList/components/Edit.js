import { useState } from 'react';
import { v4 } from 'uuid';

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState('');
  //setNote from Edit.js
  function noteChange(e) {
    setNote(e.target.value);
  }
  //setData from index.js
  //Changing the value of Data
  function addItem() {
    submittingStatus.current = true;
    add(function (prev) {
      return [...prev, { id: v4(), note: note }];
    });
  }

  return (
    <div className="flex justify-around">
      <input
        id="text"
        type="text"
        value={note}
        onChange={noteChange}
        className="w-full border-2 mx-2 p-1 border-slate-600"
      />
      <input
        onClick={addItem}
        type="submit"
        value="新增"
        className="border-2 bg-slate-500 border-slate-600 text-white px-2 cursor-pointer"
      />
    </div>
  );
};

export default Edit;
