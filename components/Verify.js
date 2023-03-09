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

const Verify = ({ setSignUpFlow }) => {
  const [isFocused, setIsFocused] = useState(false);

  const formSchema = Yup.object({
    verify: Yup.number()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters"),
  });

  const handleFocus = () => {
    setIsFocused((focus) => !focus);
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
              <Text style={globalStyles.signUpFlowTitle}>Verify</Text>
              <Text style={globalStyles.signUpFlowDesc}>
                To verify Your email address we've sent the code to{" "}
                <Text
                  style={globalStyles.signUpFlowText}
                  onPress={() => console.log("Pressed!")}
                >
                  your@email.com
                </Text>
              </Text>
            </View>
            <Formik
              initialValues={{ verify: "" }}
              validationSchema={formSchema}
              onSubmit={(values, actions) => {
                actions.resetForm();
                console.log(values);
                setSignUpFlow(0);
              }}
            >
              {(props) => (
                <View style={globalStyles.form}>
                  <Input
                    isFocused={isFocused}
                    props={props}
                    name="verify"
                    label="Verification Code"
                    placeholder="Enter verification code..."
                    iconSrc={require("../assets/lock.png")}
                    handleFocus={handleFocus}
                  />

                  <Button
                    background="#1e90ff"
                    width={200}
                    fontSize={20}
                    btnText="Verify"
                    fontWeight={700}
                    borderRadius={50}
                    onPress={props.handleSubmit}
                    customClass={{ paddingVertical: 8, marginTop: 10 }}
                  />
                  <Text style={globalStyles.signUpFlowDesc}>
                    By Verifying you agree to the BookStack's{" "}
                    <Text
                      style={globalStyles.signUpFlowText}
                      onPress={() => console.log("Pressed!")}
                    >
                      terms and conditions
                    </Text>
                    .
                  </Text>
                </View>
              )}
            </Formik>

            <Button
              borderColor="#1e90ff"
              borderWidth={2}
              borderRadius={50}
              width={200}
              fontSize={20}
              fontWeight="bold"
              color="#1e90ff"
              customClass={{
                paddingVertical: 7,
                justifyContent: "center",
              }}
              btnText="Resend Code"
              imgHeight={20}
              onPress={() => setSignUpFlow(1)}
            />
          </View>
        }
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 50,
  },
});

export default Verify;
