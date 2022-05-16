//Components
import Item from './Item';

const List = ({ listData, deleteData }) => {
  return (
    <div>
      {listData.length < 1 ? (
        <div className="mt-2 text-center"> There's no pending list.</div>
      ) : (
        <ul className="mt-1 mb-1">
          {listData.map(item => {
            const { todo, id } = item;
            return (
              <Item key={id} id={id} deleteData={deleteData} value={todo} />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default List;
