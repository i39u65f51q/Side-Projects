//Icons
import { BsTrash } from 'react-icons/bs';

const Item = ({ value, id, deleteData }) => {
  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter(item => item.id != id);
    });
  }
  return (
    <div className="mb-1">
      <li className="bg-slate-300 border-l-4 pl-2 border-x-slate-700 p-2 flex justify-between items-center">
        <div>
          <input type="checkbox" name="" id={id} />
          <label htmlFor={id} className="ml-2">
            {value}
          </label>
        </div>
        <button onClick={deleteItem} className="hover:text-red-500">
          <BsTrash />
        </button>
      </li>
    </div>
  );
};

export default Item;
