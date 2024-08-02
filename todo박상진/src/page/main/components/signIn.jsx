import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();

  const onSubmitSignIn = (event) => {
    event.preventDefault();

    const { email, password } = event.target;
    if (!email.value.trim() || !password.value.trim) return;
    if (email.value === "test@test.com" && password.value === "testtest") {
      return navigate("/todo");
    }
    alert("아이디와 비밀번호를 확인해주세요");
  };
  return (
    <form onSubmit={onSubmitSignIn}>
      <input label={"이메일"} placeholder="email" name="email" />
      <input label={"비밀번호"} placeholder="password" name="password" />
      <button>로그인</button>
    </form>
  );
};
export default SignInForm;
