const Btn = ({ item, index, id, getIndex }) => {
  const { title } = item;
  // id == index from APP.js
  // index == button's index
  return (
    <button
      onClick={() => getIndex(index)}
      className={` font-bold ${id == index ? 'text-red-500' : ''}`}
    >
      {title}
    </button>
  );
};
export default Btn;
