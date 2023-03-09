import React, { useState } from "react";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import BackgroundImage from "../BackgroundImage";
import Verify from "../Verify";

const SignUpFlowScreen = () => {
  const [signUpFlow, setSignUpFlow] = useState(0);

  const renderForm = () => {
    switch (signUpFlow) {
      case 0:
        return <SignUp setSignUpFlow={setSignUpFlow} />;
      case 1:
        return <SignIn setSignUpFlow={setSignUpFlow} />;
      case 2:
        return <Verify setSignUpFlow={setSignUpFlow} />;
    }
  };

  return (
    <BackgroundImage
      src={require("../../assets/background-2.png")}
      customClass={{ paddingHorizontal: 20 }}
      child={renderForm()}
    />
  );
};

export default SignUpFlowScreen;
