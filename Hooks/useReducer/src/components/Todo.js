import { useReducer, useState } from 'react';
import Item from './Item';

function reducer(state, action) {
  switch (action.type) {
    case 'add-todo':
      return [...state, newTodo(action.payload.name)];
    case 'toggle-todo':
      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      });
    case 'delete-todo':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}

function newTodo(name) {
  return { id: Math.random(), name: name, complete: false };
}

const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [data, setData] = useState([]);
  console.log(todos);

  function addTodo(e) {
    e.preventDefault();
    if (!data) return;
    dispatch({ type: 'add-todo', payload: { name: data } });
    setData('');
  }
  return (
    <div className="mt-5 flex flex-col gap-3">
      <form className="flex gap-2" action="" onSubmit={addTodo}>
        <input
          className="border-2 border-slate-600 px-2"
          type="text"
          value={data}
          onChange={e => setData(e.target.value)}
          placeholder="Text Todo Here..."
        />
        <input className="border-2 border-slate-600" type="submit" />
      </form>
      <div className="border-2 min-w-fit border-slate-600 flex flex-col gap-3">
        {todos.map(item => (
          <Item item={item} key={item.id} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};
export default Todo;
