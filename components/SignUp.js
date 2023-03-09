import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import BackgroundImage from "./BackgroundImage";
import Button from "./Button";

const SignUp = () => {
  const [isFocused, setIsFocused] = useState({
    username: false,
    email: false,
    password: false,
  });

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

  const handleBlur = (name) => {
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
        customClass={{ flex: 0, borderRadius: 20, overflow: "hidden" }}
        blurRadius={5}
        child={
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Get Started</Text>
              <View style={styles.descContainer}>
                <Text style={styles.desc}>Already have an account?</Text>
                <View>
                  <Text style={styles.signIn}>Sign In</Text>
                  <View style={styles.underline}></View>
                </View>
              </View>
            </View>
            <View>
              <Formik
                initialValues={{ username: "", email: "", password: "" }}
                validationSchema={formSchema}
                onSubmit={(values, actions) => {
                  actions.resetForm();
                  console.log(values);
                }}
              >
                {(props) => (
                  <View style={styles.form}>
                    <View style={styles.inputContainer}>
                      <Image
                        source={require("../assets/person.png")}
                        style={styles.icon}
                      />
                      <View style={styles.divider}></View>
                      <Text style={styles.label}>Username</Text>
                      <TextInput
                        placeholderTextColor="#fff"
                        onFocus={() => handleBlur("username")}
                        onBlur={props.handleBlur("username")}
                        style={[
                          styles.input,
                          isFocused.username && {
                            borderBottomColor: "#1e90ff",
                          },
                        ]}
                        cursorColor="#1e90ff"
                        placeholder="Your Name..."
                        onChangeText={props.handleChange("username")}
                        value={props.values.username}
                      />
                      <Text style={styles.errorText}>
                        {props.touched.username && props.errors.username}
                      </Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <Image
                        source={require("../assets/mail.png")}
                        style={styles.icon}
                      />
                      <View style={styles.divider}></View>
                      <Text style={styles.label}>Email</Text>
                      <TextInput
                        placeholderTextColor="#fff"
                        onFocus={() => handleBlur("email")}
                        onBlur={props.handleBlur("email")}
                        style={[
                          styles.input,
                          isFocused.email && {
                            borderBottomColor: "#1e90ff",
                          },
                        ]}
                        cursorColor="#1e90ff"
                        placeholder="Your Email..."
                        onChangeText={props.handleChange("email")}
                        value={props.values.email}
                      />
                      <Text style={styles.errorText}>
                        {props.touched.email && props.errors.email}
                      </Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <Image
                        source={require("../assets/lock.png")}
                        style={styles.icon}
                      />
                      <View style={styles.divider}></View>
                      <Text style={styles.label}>Password</Text>
                      <TextInput
                        placeholderTextColor="#fff"
                        onFocus={() => handleBlur("password")}
                        onBlur={props.handleBlur("password")}
                        style={[
                          styles.input,
                          isFocused.password && {
                            borderBottomColor: "#1e90ff",
                          },
                        ]}
                        cursorColor="#1e90ff"
                        placeholder="Your Password..."
                        onChangeText={props.handleChange("password")}
                        value={props.values.password}
                      />
                      <Text style={styles.errorText}>
                        {props.touched.password && props.errors.password}
                      </Text>
                    </View>
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
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 15,
    gap: 30,
  },
  header: {
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    color: "#fff",
  },
  descContainer: {
    flexDirection: "row",
    gap: 5,
  },
  desc: {
    fontSize: 16,
    color: "#fff",
  },
  signIn: {
    position: "relative",
    color: "#1e90ff",
    fontSize: 16,
    fontWeight: 600,
  },
  underline: {
    position: "absolute",
    bottom: 2,
    minWidth: 50,
    minHeight: 1.5,
    backgroundColor: "#1e90ff",
  },
  form: {
    gap: 10,
    alignItems: "center",
  },
  label: {
    fontWeight: 600,
    fontSize: 18,
    color: "#fff",
  },
  icon: {
    position: "absolute",
    top: 37,
    left: 5,
  },
  divider: {
    position: "absolute",
    width: 2,
    height: 25,
    top: 32,
    left: 26,
    backgroundColor: "#ccc",
  },
  input: {
    position: "relative",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    paddingVertical: 5,
    paddingRight: 10,
    fontSize: 18,
    minWidth: "100%",
    color: "#fff",
    paddingLeft: 32,
  },
  errorText: {
    color: "red",
    marginTop: 3,
    fontWeight: 500,
  },
});

export default SignUp;
