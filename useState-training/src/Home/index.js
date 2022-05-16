import { useState } from 'react';
//Components
import Input from './component/Input';
import List from './component/List';

const Home = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <h2 className="text-center mb-1 text-lg font-bold">
        React-Training(useState)
      </h2>
      <div>
        <Input add={setData} />
        <List listData={data} deleteData={setData} />
      </div>
    </div>
  );
};

export default Home;
