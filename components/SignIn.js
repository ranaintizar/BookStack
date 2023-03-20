import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import { firebase } from "../firebase.config";
import BackgroundImage from "./BackgroundImage";
import Input from "./input";
import Button from "./Button";
import globalStyles from "./globalStyles";

const SignIn = ({ setShowStartup }) => {
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });
  const [hideText, setHideText] = useState(true);

  const handleFocus = (name) => {
    setIsFocused((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = key === name;
      });
      return newState;
    });
  };

  const resetPassword = async () => {
    const user = await AsyncStorage.getItem("user");
    const email = JSON.parse(user).email;

    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert("Success", "Check your email for a password reset link", [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ]);
      })
      .catch((err) => console.log(err));
  };

  const handleSignIn = async (email, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        await AsyncStorage.setItem(
          "userData",
          JSON.stringify({ email: email, password: password })
        );
        console.log("User Signed In Succesfully!");
      })
      .then(() => setShowStartup(true))
      .catch((err) => console.log(err))
      .catch((error) => {
        const msg = error.message;
        const code = error.code;
        console.log("message: ", msg);
        console.log("code: ", code);
        if (code === "auth/wrong-password") {
          Alert.alert("Oops!", "Incorrect password. Please try again.", [
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            },
          ]);
        } else if (code === "auth/user-not-found") {
          Alert.alert(
            "Oops!",
            "Sorry, we couldn't find a user with that email address. Please check and try again.",
            [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
              },
            ]
          );
        } else if (code === "auth/invalid-email") {
          Alert.alert(
            "Oops!",
            "The email you entered is invalid. Please check and try again.",
            [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
              },
            ]
          );
        } else if (code === "auth/too-many-requests") {
          Alert.alert(
            "Oops!",
            "Your account has been temporarily disabled due to too many failed login attempts. Please try again later.",
            [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
              },
            ]
          );
        }
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
            <View style={globalStyles.signUpFlowHeader}></View>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={async (values, actions) => {
                actions.resetForm();
                const { email, password } = values;
                handleSignIn(email, password);
              }}
            >
              {(props) => (
                <View style={[globalStyles.form, styles.form]}>
                  <Input
                    isFocused={isFocused.email}
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    iconSrc={require("../assets/mail.png")}
                    props={props}
                    handleFocus={handleFocus}
                  />
                  <Input
                    isFocused={isFocused.password}
                    props={props}
                    name="password"
                    label="Password"
                    placeholder="Enter Your Password"
                    iconSrc={require("../assets/lock.png")}
                    handleFocus={handleFocus}
                    showHideIcon={true}
                    hideText={hideText}
                    setHideText={setHideText}
                    forgot={true}
                    forgotOnPress={resetPassword}
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
