import React from "react";
import SignUp from "../SignUp";
import BackgroundImage from "../BackgroundImage";

const SignUpFlowScreen = () => {
  return (
    <BackgroundImage
      src={require("../../assets/background-2.png")}
      child={<SignUp />}
    />
  );
};

export default SignUpFlowScreen;
