const SIGNFORM_ARRAY = [
    {
      label: "이메일",
      name: "email",
      option: {
        placeholder: "이메일을 입력해주세요",
      },
    },
    {
      label: "비밀번호",
      name: "password",
      option: {
        placeholder: "비밀번호를 입력해주세요",
      },
    },
    {
      label: "비밀번호 확인",
      name: "password-confirm",
      option: {
        placeholder: "비밀번호를 다시 한 번 확인해주세요",
      },
    },
  ];

  const SignUpForm = ({ setFormState }) => {
    const onSubmitSignUp = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      alert(`${email}님 환영합니다`);
      setFormState("SIGN-IN");
    };
  
    return (
      <form onSubmit={onSubmitSignUp}>
        {SIGNFORM_ARRAY.map((form) => (
          <forminput
            key={form.name}
            label={form.label}
            name={form.name}
            placeholder={form.option?.placeholder}
          />
        ))}
        <button>
          회원가입
        </button>
      </form>
    );
  };

  export default SignUpForm;