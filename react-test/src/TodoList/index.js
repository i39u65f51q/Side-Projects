import { useState, useEffect, useRef } from 'react';
import { API_GET_DATA } from './global/constants';

import Edit from './components/Edit';
import Item from './components/Item';
import List from './components/List';

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();

  setData(data);
}

async function fetchPutData(data) {
  await fetch(API_GET_DATA, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ data }),
  });
}

const TodoList = () => {
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus) return;
    fetchPutData(data).then(data => (submittingStatus.current = false));
  }, [data]);

  useEffect(() => {
    fetchData(setData);
  }, []);
  return (
    <div className=" max-w-xl mx-auto ">
      <p className="bg-slate-600 text-white text-center mb-3 p-3">
        React-test with TodoList
      </p>
      <Edit add={setData} submittingStatus={submittingStatus}></Edit>
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      >
        <Item></Item>
      </List>
    </div>
  );
};

export default TodoList;
