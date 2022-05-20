const Item = ({ name, img, age }) => {
  return (
    <li className="flex items-center gap-3">
      <img
        src={img}
        alt=""
        className="w-1/6 rounded-full shadow-lg object-cover"
      />
      <div className="flex flex-col">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-slate-300"> {age} years old</p>
      </div>
    </li>
  );
};

export default Item;
