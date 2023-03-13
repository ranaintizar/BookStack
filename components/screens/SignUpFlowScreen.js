import React, { useState } from "react";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import BackgroundImage from "../BackgroundImage";
import Verify from "../Verify";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpFlowScreen = () => {
  const [signUpFlow, setSignUpFlow] = useState(0);

  const getAuthData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      console.log("Error getting user authentication data:", e);
    }
  };

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

  const loadAuthData = async () => {
    const authData = await getAuthData();
    if (authData) {
      setSignUpFlow(1);
    } else {
      setSignUpFlow(0);
    }
  };

  loadAuthData();

  return (
    <BackgroundImage
      src={require("../../assets/background-2.png")}
      customClass={{ paddingHorizontal: 20 }}
      child={renderForm()}
    />
  );
};

export default SignUpFlowScreen;
