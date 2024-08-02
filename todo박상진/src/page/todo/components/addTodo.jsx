const AddTodo = ({ todos, setTodos }) => {
  const onSubmitTodos = (event) => {
    event.preventDefault();
    const newTodos = {
      id: Math.floor(Math.random * 10000),
      title: event.target.title.value,
      content: event.target.content.value,
    };
    setTodos([...todos, newTodos]);
  };

  return (
    <form onSubmit={onSubmitTodos}>
      <input name="title" />
      <input name="content" />
      <button>추가</button>
    </form>
  );
};

export default AddTodo;
