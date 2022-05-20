const Header = ({ showEdit, setShowEdit }) => {
  function clickHandler() {
    setShowEdit(function (prev) {
      return (prev = !prev);
    });
  }

  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-lg">React-Todo</h2>
      <button
        onClick={clickHandler}
        className={` ${
          showEdit ? 'bg-green-500' : 'bg-red-500'
        } text-white px-2 py-1 rounded shadow-lg text-sm font-bold`}
      >
        {showEdit ? 'Add' : 'Close'}
      </button>
    </div>
  );
};

export default Header;
