import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../../context/todoContext";

const TodoCard = () => {
    const { todoList, setTodoList } = useContext(TodoContext);
    console.log(todoList);

    return (
        <>
            {todoList.map((el, index) => {
                console.log("map 함수 정상 작동");
                return (
                    <S.TodoContainer>
                        <S.TodoContentsContainer key={index}>
                            <S.TodoTitle className="textDisplay round">
                                {el.title}
                            </S.TodoTitle>
                            <S.TodoContent className="textDisplay round">
                                {el.content}
                            </S.TodoContent>
                        </S.TodoContentsContainer>
                        <S.CardButtonContainer className="round">
                            <S.CardButton>수정</S.CardButton>
                            <S.CardButton>삭제</S.CardButton>
                        </S.CardButtonContainer>
                    </S.TodoContainer>
                );
            })}
        </>

        // <>
        //     <S.TodoContentsContainer>
        //         <S.TodoTitle className="textDisplay round">example</S.TodoTitle>
        //         <S.TodoContent className="textDisplay round">
        //             example
        //         </S.TodoContent>
        //     </S.TodoContentsContainer>

        //     <S.CardButtonContainer className="round">
        //         <S.CardButton>수정</S.CardButton>
        //         <S.CardButton>삭제</S.CardButton>
        //     </S.CardButtonContainer>
        // </>
    );
};
export default TodoCard;
const TodoContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const TodoContentsContainer = styled.div`
    width: 75%;
    .textDisplay {
        min-height: 50px;
    }
`;
const TodoTitle = styled.div``;

const TodoContent = styled.div``;
const CardButtonContainer = styled.div`
    width: 25%;
`;
const CardButton = styled.button`
    width: 100%;
    height: 50%;
`;

const S = {
    TodoContainer,
    TodoContentsContainer,
    TodoTitle,
    TodoContent,
    CardButtonContainer,
    CardButton,
};
