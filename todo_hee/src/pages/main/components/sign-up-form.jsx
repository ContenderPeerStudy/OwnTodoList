import React from 'react';

const SignUpForm = ({ setFormState }) => {
    const handlePressSignUp = (event) => {
        event.preventDefault();

        const { email, password, confirmPassword } = event.target.elements; 
        if (!email.value.trim() || !password.value.trim() || !confirmPassword.value.trim()) return;
        if (password.value !== confirmPassword.value) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        setFormState("SIGN-IN"); 
    };

    return (
        <form onSubmit={handlePressSignUp}>
            <label>
                이메일
                <input type="email" name="email" placeholder="email" />
            </label>
            <label>
                비밀번호
                <input type="password" name="password" placeholder="password" />
            </label>
            <label>
                비밀번호 확인
                <input type="password" name="confirmPassword" placeholder="confirm password" />
            </label>
            <button type="submit">
                회원가입
            </button>
        </form>
    );
};

export default SignUpForm;
