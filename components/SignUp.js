import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import BackgroundImage from "./BackgroundImage";
import Input from "./input";
import Button from "./Button";
import globalStyles from "./globalStyles";

const SignUp = ({ setSignUpFlow }) => {
  const [isFocused, setIsFocused] = useState({
    username: false,
    email: false,
    password: false,
  });
  const [hideText, setHideText] = useState(true);

  const formSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(7, "Password must be at least 7 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        "Password must contain at least one special character"
      ),
  });

  const handleFocus = (name) => {
    setIsFocused((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = key === name;
      });
      return newState;
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <BackgroundImage
        src={require("../assets/background-3.png")}
        customClass={{
          flex: 0,
          borderRadius: 20,
          overflow: "hidden",
        }}
        blurRadius={5}
        child={
          <View style={[globalStyles.container, styles.container]}>
            <View style={globalStyles.signUpFlowHeader}>
              <Text style={globalStyles.signUpFlowTitle}>Get Started</Text>
              <Text style={globalStyles.signUpFlowDesc}>
                Already have an account?{" "}
                <Text
                  style={globalStyles.signUpFlowText}
                  onPress={() => setSignUpFlow(1)}
                >
                  Sign In
                </Text>
                .
              </Text>
            </View>
            <View>
              <Formik
                initialValues={{ username: "", email: "", password: "" }}
                validationSchema={formSchema}
                onSubmit={(values, actions) => {
                  actions.resetForm();
                  console.log(values);
                  setSignUpFlow(2);
                }}
              >
                {(props) => (
                  <View style={globalStyles.form}>
                    <Input
                      isFocused={isFocused.username}
                      name="username"
                      props={props}
                      handleFocus={handleFocus}
                    />
                    <Input
                      isFocused={isFocused.email}
                      props={props}
                      name="email"
                      label="Email"
                      placeholder="Your Email..."
                      iconSrc={require("../assets/mail.png")}
                      handleFocus={handleFocus}
                    />
                    <Input
                      isFocused={isFocused.password}
                      props={props}
                      name="password"
                      label="Password"
                      placeholder="Your Password"
                      iconSrc={require("../assets/lock.png")}
                      handleFocus={handleFocus}
                      showHideIcon={true}
                      hideText={hideText}
                      setHideText={setHideText}
                    />

                    <Button
                      background="#1e90ff"
                      width={200}
                      fontSize={20}
                      btnText="Create Account"
                      fontWeight={700}
                      borderRadius={50}
                      onPress={props.handleSubmit}
                      customClass={{ paddingVertical: 8 }}
                    />
                  </View>
                )}
              </Formik>
            </View>
          </View>
        }
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
});

export default SignUp;
