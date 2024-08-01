import styled from "styled-components";
import TodoProvider from "../../context/todoContext";
import TodoCard from "./components/TodoCard";
const Todo = () => {
    return (
        <S.Wrapper>
            <TodoProvider>
                <S.List>
                    <S.ListTitle>TODOLIST</S.ListTitle>

                    <S.TodoCardWrapper className="round">
                        <TodoCard></TodoCard>
                    </S.TodoCardWrapper>

                    <S.AddButton>추가</S.AddButton>
                </S.List>
            </TodoProvider>
        </S.Wrapper>
    );
};
const Wrapper = styled.div`
    width: 100%;
`;
const List = styled.div`
    position: absolute;
    width: 30%;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    .round {
        border: 1px solid;
        border-radius: 5px;
    }
`;
const ListTitle = styled.div`
    background-color: #00c7ae;
    width: 100%;
    font-size: 32px;
    color: white;
    font-weight: bold;
    text-align: center;
`;

const TodoCardWrapper = styled.div`
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    border: 1px solid;
    border-radius: 5px;
`;
const AddButton = styled.button`
    width: 100%;
    font-size: 32px;
`;
const S = {
    Wrapper,
    List,
    ListTitle,

    TodoCardWrapper,

    AddButton,
};
export default Todo;
