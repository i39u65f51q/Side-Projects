const Item = ({ item, dispatch }) => {
  return (
    <div className="bg-slate-400 flex gap-3">
      <span className={` text-white ${item.complete ? 'line-through' : ''}`}>
        {item.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: 'toggle-todo', payload: { id: item.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: 'delete-todo', payload: { id: item.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};
export default Item;
