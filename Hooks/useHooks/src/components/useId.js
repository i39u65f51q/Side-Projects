import { useId } from 'react';

const UseId = () => {
  //建立From表可使用ㄊ
  const id = useId();
  console.log(id);
  return (
    <div>
      <label htmlFor={id + 'first'}>first</label>
      <input type="checkbox" name="" id={id + 'first'} />
      <label htmlFor={id + 'second'}>Second</label>
      <input type="checkbox" name="" id={id + 'second'} />
    </div>
  );
};
export default UseId;
