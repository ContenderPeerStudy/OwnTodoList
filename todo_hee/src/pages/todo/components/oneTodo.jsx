import { useRef, useState } from "react";
import styled from "styled-components";

const OneTodo = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const contentRef = useRef();

  const onPressDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  const onPressChangeEditMode = () => {
    setIsEditMode(true);
  };

  const onPressEdit = () => {
    setIsEditMode(false);
    updateTodo({
      todoId: todo.id,
      content: contentRef.current.value,
    });
  };

  return (
    <Wrapper state={todo.state}>
      <Header>
        <div>
          {todo.state ? "완료" : "미완료"} - {todo.title}
        </div>
        <div>
          <button onClick={isEditMode ? onPressEdit : onPressChangeEditMode}>
            {isEditMode ? "완료" : "수정"}
          </button>
          <button onClick={onPressDeleteTodo}>삭제</button>
        </div>
      </Header>
      {isEditMode ? (
        <textarea ref={contentRef} defaultValue={todo.content}></textarea>
      ) : (
        <Content state={todo.state}>{todo.content}</Content>
      )}
    </Wrapper>
  );
};

export default OneTodo;

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.state ? "#e0ffe0" : "#ffe0e0")};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  padding: 10px 0;
`;
