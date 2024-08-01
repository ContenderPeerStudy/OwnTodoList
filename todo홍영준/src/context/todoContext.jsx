import { Children, createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: "example-1",
            content: "example-content-1",
        },
    ]);
    return (
        <TodoContext.Provider value={{ todoList, setTodoList }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
