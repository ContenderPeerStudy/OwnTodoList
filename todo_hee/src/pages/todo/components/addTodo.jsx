import styled from "styled-components";

const AddTodoModal = ({ setIsOpenAddTodoModal, todos, setTodos }) => {
  const onPressAddTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1000000),
      title: event.target.title.value,
      content: event.target.content.value,
      state: false,
    };

    setTodos([...todos, newTodo]);
    setIsOpenAddTodoModal(false);
  };

  return (
    <Modal>
      <form onSubmit={onPressAddTodo}>
        <Title>
          <h1>ADD TODO LIST</h1>
          <button type="button" onClick={() => setIsOpenAddTodoModal(false)}>
            x
          </button>
        </Title>
        <Content>
          <input name="title" placeholder="제목을 입력해주세요" />
          <textarea name="content" placeholder="할 일을 입력해주세요" />
        </Content>
        <Button type="submit">ADD</Button>
      </form>
    </Modal>
  );
};

export default AddTodoModal;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  z-index: 1000;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  display: block;
  margin: 20px auto;
`;
