//React-icons
import { GrFormPrevious } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';
//React
import { useState, useEffect } from 'react';
import { views } from './data';
import Item from './components/Item';

const Carousel = () => {
  const [data, setData] = useState(views);
  const [slide, setSlide] = useState(0);
  console.log(slide);
  useEffect(() => {
    if (slide < 0) {
      setSlide(data.length - 1);
    }
    if (slide > data.length - 1) {
      setSlide(0);
    }
    let slider = setInterval(() => {
      setSlide(slide + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [slide]);

  return (
    <main className="overflow-hidden mx-auto w-1/3 h-72 border-2 border-slate-500 relative flex justify-center">
      <button
        onClick={() => setSlide(slide - 1)}
        className="z-10 absolute left-0 top-1/2 -translate-y-1/2 text-2xl"
      >
        <GrFormPrevious />
      </button>
      {data.map((item, index) => {
        return (
          <Item
            item={item}
            slide={slide}
            index={index}
            key={index}
            data={data}
          />
        );
      })}
      <button
        onClick={() => setSlide(slide + 1)}
        className="z-10 absolute right-0 top-1/2 -translate-y-1/2 text-2xl"
      >
        <MdOutlineNavigateNext />
      </button>
    </main>
  );
};

export default Carousel;
