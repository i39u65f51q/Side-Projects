import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Edit from './components/Edit';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  async function fetchData() {
    const res = await fetch('http://localhost:3000/todos');
    const data = await res.json();
    console.log(data);
    setTodo(data);
  }

  const [todo, setTodo] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" rounded border-2 p-2 m-2 border-slate-800">
      <Header showEdit={showEdit} setShowEdit={setShowEdit} />
      <Edit addTodo={setTodo} showEdit={showEdit} />
      {todo.length < 1 ? (
        <p className="p-2 text-center text-red-500 text-base font-bold">
          There's no todo!
        </p>
      ) : (
        <List
          todo={todo}
          deleteTodo={setTodo}
          toggleTodo={setTodo}
          showEdit={showEdit}
        />
      )}
      <Footer todo={todo} />
    </div>
  );
}

export default App;
