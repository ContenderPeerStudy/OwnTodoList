import OneTodo from "./oneTodo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <OneTodo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          content={todo.content}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};
export default TodoList;
