import AddTodoModal from "./components/addTodo";
import TodoList from "./components/todoList";
import { useState } from "react";
import styled from "styled-components";

const Todo = () => {
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "example-1",
      content: "example-1",
      state: true,
    },
    {
      id: 2,
      title: "example-2",
      content: "example-2",
      state: false,
    },
  ]);

  return (
    <>
      {isOpenAddTodoModal && (
        <AddTodoModal
          setIsOpenAddTodoModal={setIsOpenAddTodoModal}
          todos={todos}
          setTodos={setTodos}
        />
      )}
      <Wrapper>
        <Container>
          <Title>TODOLIST</Title>
          <TodoList todos={todos} setTodos={setTodos} />
          <Button onClick={() => setIsOpenAddTodoModal(true)}>추가</Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default Todo;

const Wrapper = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Button = styled.button`
  display: block;
  margin: 20px auto;
`;
