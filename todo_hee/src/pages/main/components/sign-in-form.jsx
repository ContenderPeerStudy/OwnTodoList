import React from 'react';
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    const navigate = useNavigate();

    const handlePressSignIn = (event) => {
        event.preventDefault();

        const { email, password } = event.target.elements; 
        if (!email.value.trim() || !password.value.trim()) return;
        if (email.value === "test" && password.value === "test") {
            return navigate("/todo");
        }
        alert("아이디와 비밀번호를 다시 확인해주세요.");
    };

    return (
        <form onSubmit={handlePressSignIn}>
            <label>
                이메일
                <input type="email" name="email" placeholder="email" />
            </label>
            <label>
                비밀번호
                <input type="password" name="password" placeholder="password" />
            </label>
            <button type="submit">
                로그인
            </button>
        </form>
    );
};

export default SignInForm;
