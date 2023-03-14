import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firebase } from "../firebase.config";
import BackgroundImage from "./BackgroundImage";
import Input from "./input";
import Button from "./Button";
import globalStyles from "./globalStyles";

const SignUp = ({ setSignUpFlow, setShowStartup }) => {
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

  const handleSignUp = async (username, email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        const msg = err.message;
        const code = err.code;
        console.log("message: " + msg);
        console.log("code: " + code);
        if (code === "auth/email-already-in-use") {
          Alert.alert(
            "Oops!",
            "The email you entered is already registered. Please sign in or use a different email address.",
            [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
              },
            ]
          );
        }
      })
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://bookstack-7bc4a.firebaseapp.com",
          })
          .then(() => setShowStartup(true))
          .catch((err) =>
            console.log("message: ", err.message, "code: ", err.code)
          )
          .then(() => {
            Alert.alert(
              "Sent!",
              "Verification email has been sent to your email address.",
              [
                {
                  text: "OK",
                  onPress: () => console.log("OK Pressed"),
                },
              ]
            );
          });
      })
      .then(async () => {
        const user = { username: username, email: email };
        await AsyncStorage.setItem("user", JSON.stringify(user))
          .then(() => console.log("Added"))
          .catch((err) => {
            console.log("Error saving user authentication data:", err);
          });
      })
      .catch((err) =>
        console.error("message: ", err.message, "code: ", err.code)
      );
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
                onSubmit={async (values, actions) => {
                  actions.resetForm();
                  const { username, email, password } = values;
                  handleSignUp(username, email, password);
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
