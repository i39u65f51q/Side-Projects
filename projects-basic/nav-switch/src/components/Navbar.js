import Btn from './Btn';
const Navbar = ({ content, id, getIndex }) => {
  return (
    <nav className="flex gap-5">
      {content.map((item, index) => {
        return (
          <Btn
            key={index}
            item={item}
            index={index}
            getIndex={getIndex}
            id={id}
          />
        );
      })}
    </nav>
  );
};
export default Navbar;
