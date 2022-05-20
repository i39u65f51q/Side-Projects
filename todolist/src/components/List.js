import Item from './Items';
const List = ({ todo, deleteTodo, toggleTodo, showEdit }) => {
  return (
    <ul className="my-5 flex flex-col gap-3">
      {todo.map((item, index) => {
        return (
          <Item
            id={item.id}
            key={index}
            item={item}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ul>
  );
};
export default List;
