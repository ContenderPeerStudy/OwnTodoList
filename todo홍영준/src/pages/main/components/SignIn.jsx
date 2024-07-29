import { useNavigate } from "react-router-dom";
const SignIn = () => {
    const navigate = useNavigate();

    const handlePressSignIn = () => {
        event.preventDefault();

        const { email, password } = event.target;
        if (!email.value.trim() || !password.value.trim()) return;

        if (email.value === "test" && password.value === "test")
            return navigate("/todo");
        alert("아이디와 비밀번호를 확인하세요");
    };
    return (
        <S.Form onSubmit={handlePressSignIn}>
            
        </S.Form>
    );
};

export default SignIn;
