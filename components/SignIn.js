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

const SignIn = ({ setSignUpFlow }) => {
  const [isFocused, setIsFocused] = useState({
    username: false,
    password: false,
  });
  const [hideText, setHideText] = useState(true);

  const formSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters"),
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
              <Text style={globalStyles.signUpFlowTitle}>
                Sign In to Your Account
              </Text>
              <Text style={globalStyles.signUpFlowDesc}>
                Don't have an account?{" "}
                <Text
                  style={globalStyles.signUpFlowText}
                  onPress={() => setSignUpFlow(0)}
                >
                  Sign Up
                </Text>
                .
              </Text>
            </View>
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
                <View style={[globalStyles.form, styles.form]}>
                  <Input
                    isFocused={isFocused.username}
                    name="username"
                    props={props}
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
                    forgot={true}
                  />

                  <Button
                    background="#1e90ff"
                    width={270}
                    fontSize={20}
                    btnText="Sign In"
                    fontWeight={700}
                    borderRadius={50}
                    onPress={props.handleSubmit}
                    customClass={{ paddingVertical: 8, marginTop: 25 }}
                  />
                </View>
              )}
            </Formik>
            <Text style={globalStyles.signUpFlowDesc}>OR</Text>
            <Button
              borderColor="#1e90ff"
              borderWidth={2}
              borderRadius={50}
              width={270}
              fontSize={20}
              fontWeight="bold"
              color="#1e90ff"
              customClass={{
                paddingVertical: 7,
                justifyContent: "center",
              }}
              btnText="Continue with Google"
              iconLeftSrc={require("../assets/google.png")}
              imgHeight={20}
              onPress={() => setSignUpFlow(2)}
            />
          </View>
        }
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  form: {
    marginTop: 30,
  },
});

export default SignIn;
