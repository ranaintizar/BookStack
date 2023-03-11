import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

const ToggleBtn = ({ theme, setTheme }) => {
  const [left, setLeft] = useState(6);
  const [background, setBackground] = useState("#f1f2f3");
  const [btnBackground, setBtnBackground] = useState("#d2d3da");
  const [borderColor, setBorderColor] = useState("transparent");

  const handleOnPress = () => {
    setLeft((left) => (left === 6 ? 44 : 6));
    if (theme === "light") {
      setTheme("dark");
      setBackground("#2E2F38");
      setBtnBackground("#4e505f");
      setBorderColor("transparent");
    } else if (theme === "dark") {
      setTheme("light");
      setBackground("#F1F2F3");
      setBtnBackground("#d2d3da");
      setBorderColor("transparent");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: background,
            borderWidth: 1,
            borderColor: borderColor,
          },
        ]}
      >
        <Feather name="moon" size={24} color="#1e90ff" />
        <Feather name="sun" size={20} color="coral" />
        <View
          style={[styles.btn, { left: left, backgroundColor: btnBackground }]}
        ></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 35,
    borderRadius: 50,
    paddingHorizontal: 8,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btn: {
    position: "absolute",
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#4E505F",
  },
});

export default ToggleBtn;
