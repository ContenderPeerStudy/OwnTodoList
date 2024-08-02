import { useRef, useState } from "react";

const OneTodo = ({ id, title, content, todos, setTodos }) => {
  const [isEdit, setIsEdit] = useState(false);
  const titleEditInput = useRef();
  const contentEditInput = useRef();

  const onClickSetEditMode = () => {
    setIsEdit(true);
  };
  const onClickCompletedEdit = () => {
    const tempTodos = [...todos];
    const todosIndex = tempTodos.findIndex((todo) => todo.id === id);
    tempTodos[todosIndex] = {
      ...tempTodos[todosIndex],
      title: titleEditInput.current.value,
      content: contentEditInput.current.value,
    };
    setTodos(tempTodos);
    setIsEdit(false);
  };

  const onClickDeleteTodos = () => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };

  return (
    <div>
      {isEdit ? <input ref={titleEditInput} /> : title}
      {isEdit ? <input ref={contentEditInput} /> : content}
      <button onClick={isEdit ? onClickCompletedEdit : onClickSetEditMode}>
        {isEdit ? "완료" : "수정"}
      </button>
      <button onClick={onClickDeleteTodos}>삭제</button>
    </div>
  );
};
export default OneTodo;
