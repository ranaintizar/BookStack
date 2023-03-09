import React, { useState } from "react";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import BackgroundImage from "../BackgroundImage";

const SignUpFlowScreen = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const renderForm = () => {
    return showSignIn ? (
      <SignIn setShowSignIn={setShowSignIn} />
    ) : (
      <SignUp setShowSignIn={setShowSignIn} />
    );
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
