import { useState } from "react";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "example-1",
      content: "example-1",
    },
    {
      id: 2,
      title: "example-2",
      content: "example-2",
    },
  ]);

  return (
    <div>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
