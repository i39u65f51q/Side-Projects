import { useState } from 'react';

const Edit = ({ addTodo, showEdit }) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState(false);

  async function addItem() {
    if (!text && !time) return;
    const data = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      day: time,
      reminder: reminder,
    };
    const res = await fetch('http://localhost:3000/todos/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    });
    const succ = await res.json();
    console.log(succ);
    addTodo(function (prev) {
      console.log(prev);
      return [...prev, succ];
    });
    setText('');
    setTime('');
    setReminder(false);
  }

  function getText(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }
  function getTime(e) {
    console.log(e.target.value);
    setTime(e.target.value);
  }
  function getReminder(e) {
    console.log(e.target.checked);
    setReminder(e.target.checked);
  }

  return showEdit ? (
    ''
  ) : (
    <div className="flex flex-col gap-3">
      <div>
        <label className="text-sm font-bold" htmlFor="">
          Todo:
        </label>
        <input
          value={text}
          onChange={getText}
          className="w-full border-2 p-1 text-sm rounded"
          type="text"
          placeholder="Add Todo"
        />
      </div>
      <div>
        <label className="text-sm font-bold" htmlFor="">
          Time:
        </label>
        <input
          value={time}
          onChange={getTime}
          className="w-full border-2 p-1 text-sm rounded"
          type="text"
          placeholder="Add Time"
        />
      </div>
      <div className="w-fit flex gap-2 items-center justify-between">
        <label className="text-sm font-bold " htmlFor="reminder">
          Set Reminder
        </label>
        <input
          type="checkbox"
          name=""
          id="reminder"
          value={reminder}
          onChange={getReminder}
        />
      </div>
      <button
        onClick={addItem}
        className="bg-slate-600 text-white p-1 text-sm font-bold rounded"
      >
        Save Todos
      </button>
    </div>
  );
};
export default Edit;
