import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const SignIn = () => {
    const navigate = useNavigate();
    const emailRef = useRef("");
    const pwdRef = useRef("");
    const handlePressSignIn = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = pwdRef.current.value;
        if (!email.trim() || !password.trim()) return;

        if (email === "test" && password === "test") return navigate("/todo");
        alert("아이디와 비밀번호를 확인하세요");
    };
    return (
        <S.Form onSubmit={handlePressSignIn}>
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
            <button>로그인</button>
        </S.Form>
    );
};

export default SignIn;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const S = {
    Form,
};
