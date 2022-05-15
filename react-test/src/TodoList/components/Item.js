const Item = ({ id, note, deleteData, submittingStatus }) => {
  //setData from Index.js
  function deleteItem() {
    submittingStatus.current = true;
    deleteData(function (prev) {
      return prev.filter(item => item.id != id);
    });
  }
  return (
    <div className="flex justify-between mt-2 border-b-2 border-slate-600 items-center p-1">
      <div>
        <input type="checkbox" id="" />
        <label htmlFor="" className="ml-2 ">
          {note}
        </label>
      </div>
      <button
        onClick={deleteItem}
        className="bg-red-500 text-white p-1 rounded-md"
      >
        刪除
      </button>
    </div>
  );
};

export default Item;
