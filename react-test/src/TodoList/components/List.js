import Item from './Item';

//ListData = data from index.js, default = []
//deleteData = setData from index.js
const List = ({ listData, deleteData, submittingStatus }) => {
  // console.log(listData);
  return (
    <ul className="p-2  m-2 flex flex-col gap-1">
      {listData.map(item => {
        const { note, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          ></Item>
        );
      })}
    </ul>
  );
};
export default List;
