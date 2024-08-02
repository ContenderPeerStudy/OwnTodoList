import React, { useState } from 'react';
import SignInForm from './components/sign-in-form';
import SignUpForm from './components/sign-up-form';

const Main = () => {
    const [formState, setFormState] = useState("SIGN-IN");

    const tabArray = [
        {
            name: "SIGN-IN"
        },
        {
            name: "SIGN-UP"
        }
    ];

    const handlePressSignTab = (tabName) => {
        setFormState(tabName);
        console.log(formState);
    };

    return (
        <div>
            {tabArray.map((tab, index) => (
                <button
                    key={index}
                    className={formState === tab.name ? 'selected-tab' : ''}
                    onClick={() => handlePressSignTab(tab.name)}
                >
                    {tab.name}
                </button>
            ))}

            {formState === "SIGN-IN" ? (
                <SignInForm />
            ) : (
                <SignUpForm setFormState={setFormState} />
            )}
        </div>
    );
};

export default Main;
