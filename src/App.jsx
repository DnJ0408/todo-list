import { useState } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'


function App() {

  const [todos, setTodos] = useState([]);

  //*--- 삭제 기능을 위한 상태 변경 함수 ---*//
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  //*--- 완료/취소 기능을 위한 상태 변경 함수 ---*//
  const handleToggleStatus = (id, newStatus) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: newStatus } : todo
    ));
  };

  return (
    <>
      <h1>My TodoList</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} handleDelete={handleDelete} handleToggleStatus={handleToggleStatus} />
    </>
  )
}

export default App;
