const Item = ({ item, index, slide, data }) => {
  const { img, name, quote } = item;

  //TranslateX all IMG to Right
  let slideImg = 'translate-x-full';
  //If IMG[index] == Slide
  if (slide === index) {
    slideImg = 'translate-x-0';
  }
  //Last IMG TranslateX to Left
  if (slide - 1 === index || (slide === 0 && index === data.length - 1)) {
    slideImg = '-translate-x-full';
  }

  return (
    <div
      className={` ${slideImg} 
       transition-all ease duration-500 absolute h-full w-full flex flex-col items-center px-10 py-5`}
    >
      <img
        className="rounded-full aspect-square w-1/5 shadow-lg"
        src={img}
        alt=""
      />
      <h4 className="font-bold text-sky-600">{name}</h4>
      <p className="text-sm ">{quote}</p>
    </div>
  );
};
export default Item;
