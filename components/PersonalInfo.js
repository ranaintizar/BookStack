import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as Yup from "yup";
import Button from "./Button";

const PersonalInfo = ({ theme, showModal }) => {
  const [scaleValue, setScaleValue] = useState(0);
  const [placeholder, setPlaceholder] = useState("");
  const [inputMode, setInputMode] = useState("text");
  const [value, setVal] = useState("");
  const [userinfo, setUserinfo] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  useEffect(() => {
    AsyncStorage.getItem("userinfo").then((value) => {
      const info = JSON.parse(value);
      setUserinfo(info);
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("userinfo", JSON.stringify(userinfo));
  }, [userinfo]);

  const emailSchema = Yup.string()
    .email("Invalid email")
    .required("Email is required");

  const nameSchema = Yup.string()
    .min(4, "Name must be at least 4 characters")
    .required("Name is required");

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
    if (placeholder === "Enter First Name") {
      nameSchema
        .validate(value)
        .then(() => {
          let newUserInfo = { ...userinfo, fname: value };
          setUserinfo(newUserInfo);
          setScaleValue(0);
        })
        .catch((error) => {
          console.log(error.message);
          if (error.message === "Name must be at least 4 characters") {
            Alert.alert("Error", "Name must be at least 4 characters", [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
              },
            ]);
          }
        });
    } else if (placeholder === "Enter Last Name") {
      nameSchema
        .validate(value)
        .then(() => {
          let newUserInfo = { ...userinfo, lname: value };
          setUserinfo(newUserInfo);
          setScaleValue(0);
        })
        .catch((error) => {
          console.log(error);
          if (error.message === "Name must be at least 4 characters") {
            Alert.alert("Error", "Name must be at least 4 characters", [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
              },
            ]);
          }
        });
    } else if (placeholder === "Enter Email") {
      emailSchema
        .validate(value)
        .then(() => {
          let newUserInfo = { ...userinfo, email: value };
          setUserinfo(newUserInfo);
          setScaleValue(0);
        })
        .catch((error) => {
          console.log(error);
          if (error.message === "Invalid email") {
            Alert.alert("Error", "Invalid email", [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
              },
            ]);
          }
        });
    }

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
            <Text style={styles.fieldVal}>{userinfo.fname}</Text>
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
            <Text style={styles.fieldVal}>{userinfo.lname}</Text>
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
            <Text style={styles.fieldVal}>{userinfo.email}</Text>
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
  fieldName: { padding: 10, fontSize: 20, fontWeight: "bold", width: "30%" },
  fieldVal: {
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 600,
    width: "70%",
    color: "#72757e",
  },
});

export default PersonalInfo;
