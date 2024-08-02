const SingFormArray = [
  {
    label: "이메일",
    name: "email",
  },
  {
    label: "비밀번호",
    name: "password",
  },
  {
    label: "비밀번호확인",
    name: "password-confirm",
  },
];

const SignUpForm = ({ setFormState }) => {
  const onSubmitSingUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    alert(`${email}님 환영합니다`);
    setFormState("sign-in");
  };
  return (
    <form onSubmit={onSubmitSingUp}>
      {SingFormArray.map((form) => (
        <input
          key={form.name}
          label={form.label}
          placeholder={form.label}
          name={form.name}
        />
      ))}
      <button>회원가입</button>
    </form>
  );
};

export default SignUpForm;
