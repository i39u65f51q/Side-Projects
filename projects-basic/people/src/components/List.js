import Item from './item';

const List = ({ data }) => {
  return data.length < 1 ? (
    <div className="m-5 font-bold">No People on Here!</div>
  ) : (
    <div className="w-full flex flex-col gap-5 my-5">
      {data.map(person => {
        const { name, age, img, id } = person;
        return <Item name={name} age={age} img={img} key={id} />;
      })}
    </div>
  );
};

export default List;
