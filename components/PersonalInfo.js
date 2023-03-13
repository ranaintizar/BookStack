import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import Button from "./Button";

const PersonalInfo = ({ theme, showModal }) => {
  const [scaleValue, setScaleValue] = useState(0);
  const [placeholder, setPlaceholder] = useState("");
  const [inputMode, setInputMode] = useState("text");
  const [value, setVal] = useState("");

  const handleChange = (name) => {
    if (name === "fname") {
      setPlaceholder("Enter First Name");
    } else if (name === "lname") {
      setPlaceholder("Enter Last Name");
    } else if (name === "email") {
      setPlaceholder("Enter Email");
    }
    setScaleValue(1);
  };

  const handleSubmit = () => {
    setScaleValue(0);
    setVal("");
  };

  const handleCancel = () => {
    setScaleValue(0);
    setVal("");
  };

  return (
    <View
      style={[
        styles.container,
        theme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#16161a" },
      ]}
    >
      <View style={styles.header}>
        <Button
          btnText="Close"
          color="#1e90ff"
          fontSize={18}
          onPress={() => showModal(false)}
        />
        <Text
          style={[
            styles.title,
            theme === "light" ? { color: "#16161a" } : { color: "#fff" },
          ]}
        >
          Personal Info
        </Text>
        <Button
          btnText="Done"
          color="#1e90ff"
          fontSize={18}
          onPress={() => showModal(false)}
        />
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/Profile-Pic.jpg")}
          style={styles.img}
        />
        <Button
          btnText="Upload Image"
          color="#1e90ff"
          fontSize={18}
          onPress={() => console.log("Upload Image")}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.note}>Long Press to change the desired field.</Text>
        <TouchableWithoutFeedback onLongPress={() => handleChange("fname")}>
          <View style={styles.field}>
            <Text
              style={[
                styles.fieldName,
                theme === "light" ? { color: "#16161a" } : { color: "#f1f2f3" },
              ]}
            >
              First Name
            </Text>
            <Text style={styles.fieldVal}>John</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.divider}></View>
        <TouchableWithoutFeedback onLongPress={() => handleChange("lname")}>
          <View style={styles.field}>
            <Text
              style={[
                styles.fieldName,
                theme === "light" ? { color: "#16161a" } : { color: "#f1f2f3" },
              ]}
            >
              Last Name
            </Text>
            <Text style={styles.fieldVal}>Doe</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.divider}></View>
        <TouchableWithoutFeedback onLongPress={() => handleChange("email")}>
          <View style={styles.field}>
            <Text
              style={[
                styles.fieldName,
                theme === "light" ? { color: "#16161a" } : { color: "#f1f2f3" },
              ]}
            >
              Email
            </Text>
            <Text style={styles.fieldVal}>johndoe@example.com</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.divider}></View>
      </View>
      <View
        style={[
          styles.modal,
          theme === "light"
            ? { backgroundColor: "#fff", shadowColor: "#000" }
            : { backgroundColor: "#f1f2f3", shadowColor: "#fff" },
          { transform: [{ scale: scaleValue }], transformOrigin: "center" },
        ]}
      >
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onChangeText={(val) => setVal(val)}
          value={value}
          inputMode={inputMode}
        />
        <View style={styles.btnContainer}>
          <Button
            btnText="Change"
            background="#1e90ff"
            fontSize={20}
            width="40%"
            onPress={handleSubmit}
          />
          <Button
            btnText="Cancel"
            borderColor="#1e90ff"
            color="#1e90ff"
            borderWidth={1}
            fontSize={20}
            width="40%"
            onPress={handleCancel}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 25, alignItems: "center", gap: 30 },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
  },
  imgContainer: {
    gap: 10,
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  modal: {
    position: "absolute",
    height: 130,
    width: "90%",
    paddingHorizontal: 10,
    elevation: 10,
    borderRadius: 10,
    top: "40%",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: "40%",
    fontSize: 20,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    borderColor: "#1e90ff",
  },
  btnContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    width: "100%",
    gap: 10,
    justifyContent: "space-evenly",
  },
  content: { flex: 1, gap: 5, width: "100%", alignItems: "center" },
  note: { color: "#72757e", fontSize: 16, marginTop: 10, marginBottom: 20 },
  divider: { width: "100%", height: 2, backgroundColor: "#3333" },
  field: {
    flexDirection: "row",
  },
  fieldName: { padding: 10, fontSize: 20, fontWeight: "bold", width: "35%" },
  fieldVal: {
    padding: 10,
    fontSize: 20,
    fontWeight: 600,
    width: "65%",
    color: "#72757e",
  },
});

export default PersonalInfo;
