import { TiDelete } from 'react-icons/ti';
const Item = ({ id, item, deleteTodo, toggleTodo }) => {
  async function deleteItem() {
    await fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' });

    deleteTodo(function (prev) {
      console.log(prev);
      return prev.filter(todo => todo.id !== id);
    });
  }

  async function toggleItem() {
    const res1 = await fetch(`http://localhost:3000/todos/${id}`);
    const getData = await res1.json();
    const toggleData = {
      ...getData['data'],
      reminder: !getData['data'].reminder,
    };

    const res2 = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toggleData),
    });
    const putData = await res2.json();

    toggleTodo(function (prev) {
      return prev.map(todo => {
        return todo['data'].id === id
          ? { ...todo['data'], reminder: putData['data'].reminder }
          : todo;
      });
    });
  }

  return (
    <li
      onClick={toggleItem}
      className={` px-3 py-1 border-slate-700 bg-slate-200 rounded-r-sm flex justify-between ${
        item.reminder ? 'border-l-4' : ''
      } `}
    >
      <div>
        <h4 className="text-base font-bold">{item['data'].text}</h4>
        <p className="text-sm font-medium">{item['data'].day}</p>
      </div>
      <button onClick={deleteItem} className="text-xl">
        <TiDelete className="pointer-events-none" />
      </button>
    </li>
  );
};

export default Item;
