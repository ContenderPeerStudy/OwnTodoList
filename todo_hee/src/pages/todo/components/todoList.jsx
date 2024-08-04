import OneTodo from "./oneTodo";
import styled from "styled-components";

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const updateTodo = ({ todoId, content }) => {
    const tempTodos = [...todos];
    const selectedTodoIndex = tempTodos.findIndex((todo) => todo.id === todoId);
    tempTodos[selectedTodoIndex] = {
      ...tempTodos[selectedTodoIndex],
      content,
    };
    setTodos(tempTodos);
  };

  return (
    <Wrapper>
      {todos.map((todo) => (
        <OneTodo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  margin-top: 20px;
`;
