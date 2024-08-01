import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../../context/todoContext";

const AddTodoModal = ({ $setIsOpenAddTodoModal }) => {
    const { todoList, setTodoList } = useContext(TodoContext);
    const onPressAddBtn = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000000);
        const title = e.target.title.value;
        const content = e.target.content.value;
        setTodoList([...todoList, { id, title, content }]);
        $setIsOpenAddTodoModal(false);
    };

    return (
        <S.ModalScreen>
            <S.AddTodoForm
                onSubmit={(e) => {
                    onPressAddBtn(e);
                }}
            >
                <S.CloseButton
                    type="button"
                    onClick={() => {
                        $setIsOpenAddTodoModal(false);
                    }}
                >
                    X
                </S.CloseButton>
                <S.InputContainer>
                    <input placeholder="제목을 입력하세요" name="title"></input>
                    <input
                        placeholder="내용을 입력하세요"
                        name="content"
                    ></input>
                    <button>추가</button>
                </S.InputContainer>
            </S.AddTodoForm>
        </S.ModalScreen>
    );
};
const ModalScreen = styled.div`
    height: 100vh;
    width: 100vw;
    top: 0;
    position: fixed;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
`;
const AddTodoForm = styled.form`
    background-color: white;
    width: 30%;
    height: 30%;
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
`;
const CloseButton = styled.button`
    position: absolute;
    left: 100%;
    transform: translateX(-100%);
`;
const InputContainer = styled.div`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const S = {
    AddTodoForm,
    ModalScreen,
    CloseButton,
    InputContainer,
};
export default AddTodoModal;
