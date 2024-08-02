import { useState } from "react";
import SignInForm from "./components/signIn";
import SignUpForm from "./components/signUp";

const Main = () => {
  const [formState, setFormState] = useState("sign-in");

  const tabArray = [
    {
      name: "sign-in",
    },
    {
      name: "sign-up",
    },
  ];

  const onClickTab = (tabname) => {
    setFormState(tabname);
  };

  return (
    <div>
      {tabArray.map((tab, index) => (
        <tab
          key={index}
          $isSelected={formState === tab.name}
          onClick={onClickTab}
        >
          {tab.name}
        </tab>
      ))}
      {formState === "sign-in" ? (
        <SignInForm />
      ) : (
        <SignUpForm setFormState={setFormState} />
      )}
    </div>
  );
};
export default Main;
