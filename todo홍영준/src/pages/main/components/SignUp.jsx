import { useRef } from "react";
import styled from "styled-components";

const SignUp = ({ $setSelectState }) => {
    const handlePressSignUp = () => {
        alert(`${emailRef.current.value}님 환영합니다!`);
        $setSelectState("SignIn");
    };
    const emailRef = useRef("");
    const pwdRef = useRef("");
    const pwdConfirmRef = useRef("");
    return (
        <S.Form
            onSubmit={() => {
                handlePressSignUp();
            }}
        >
            <input
                type="text"
                placeholder="이메일을 입력하세요"
                ref={emailRef}
            />
            <input
                type="text"
                placeholder="패스워드를 입력하세요"
                ref={pwdRef}
            />
            <input
                type="text"
                placeholder="패스워드를 다시 입력해주세요"
                ref={pwdConfirmRef}
            />
            <button>회원가입</button>
        </S.Form>
    );
};
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const S = {
    Form,
};

export default SignUp;
