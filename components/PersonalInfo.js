import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TextInput, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Yup from "yup";
import Button from "./Button";
import InputField from "./PersonalInfoField";
import { MaterialIcons } from "@expo/vector-icons";

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
  const [imageUri, setImageUri] = useState(null);
  const [scale, setScale] = useState(0);
  const [zIndex, setzIndex] = useState(-10);

  useEffect(() => {
    AsyncStorage.getItem("userinfo").then((value) => {
      const info = JSON.parse(value);
      setUserinfo(info);
    });
    AsyncStorage.getItem("imageUri").then((value) => setImageUri(value));
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

  const usernameSchema = Yup.string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters")
    .max(15, "Username cannot be more than 15 characters")
    .matches(
      /^[a-zA-Z0-9_.]+$/,
      "Username can only contain letters, numbers, dots, and underscores"
    );

  const handleChange = (name) => {
    if (name === "fname") {
      setPlaceholder("Enter First Name");
    } else if (name === "lname") {
      setPlaceholder("Enter Last Name");
    } else if (name === "email") {
      setPlaceholder("Enter Email");
    } else if (name === "username") {
      setPlaceholder("Enter Username");
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
          } else if (error.message === "Name is required") {
            Alert.alert("Error", "Name cannot be empty", [
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
          } else if (error.message === "Name is required") {
            Alert.alert("Error", "Name cannot be empty", [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
              },
            ]);
          }
        });
    } else if (placeholder === "Enter Email") {
      Alert.alert(
        "Sorry",
        "This is service is not available for Email Address Yet.",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ]
      );
      // emailSchema
      //   .validate(value)
      //   .then(() => {
      //     let newUserInfo = { ...userinfo, email: value };
      //     setUserinfo(newUserInfo);
      //     setScaleValue(0);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     if (error.message === "Invalid email") {
      //       Alert.alert("Error", "Invalid email", [
      //         {
      //           text: "OK",
      //           onPress: () => console.log("OK Pressed"),
      //         },
      //       ]);
      //     }
      //   });
    } else if (placeholder === "Enter Username") {
      usernameSchema
        .validate(value)
        .then(() => {
          let newUserInfo = { ...userinfo, username: value };
          setUserinfo(newUserInfo);
          setScaleValue(0);
        })
        .catch((error) => {
          console.log(error);
          if (error.message === "Username must be at least 4 characters") {
            Alert.alert("Error", "Username must be at least 4 characters", [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
              },
            ]);
          } else if (
            error.message === "Username cannot be more than 15 characters"
          ) {
            Alert.alert("Error", "Username cannot be more than 15 characters", [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
              },
            ]);
          } else if (
            error.message ===
            "Username can only contain letters, numbers, dots, and underscores"
          ) {
            Alert.alert(
              "Error",
              "Username can only contain letters, numbers, dots, and underscores",
              [
                {
                  text: "OK",
                  onPress: () => console.log("OK Pressed"),
                },
              ]
            );
          }
        });
    }

    setVal("");
  };

  const handleCancel = () => {
    setScaleValue(0);
    setVal("");
  };

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      AsyncStorage.setItem("imageUri", result.assets[0].uri);
      closeModal();
    }
  };

  const handleTakePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      AsyncStorage.setItem("imageUri", result.assets[0].uri);
      closeModal();
    }
  };

  const closeModal = () => {
    setScale(0);
    setzIndex(-10);
  };

  const openModal = () => {
    setScale(1);
    setzIndex(10);
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
        <View style={styles.image}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                (imageUri && imageUri) ||
                "https://i.postimg.cc/Gm0zSwW8/default-Pic.jpg",
            }}
            style={styles.img}
          />
        </View>
        <Button
          btnText="Upload Image"
          color="#1e90ff"
          fontSize={18}
          onPress={openModal}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.note}>Long Press to change the desired field.</Text>
        <InputField
          theme={theme}
          val={userinfo.fname}
          handleChange={handleChange}
        />
        <InputField
          theme={theme}
          name="lname"
          label="Last Name"
          val={userinfo.lname}
          handleChange={handleChange}
        />
        <InputField
          theme={theme}
          name="email"
          label="Email"
          val={userinfo.email}
          handleChange={handleChange}
        />
        <InputField
          theme={theme}
          name="username"
          label="Username"
          val={userinfo.username}
          handleChange={handleChange}
        />
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
      <View
        style={[
          styles.imageUploadContainer,
          { transform: [{ scaleY: scale }] },
          { zIndex: zIndex },
        ]}
      >
        <MaterialIcons
          name="close"
          size={24}
          color="#fff"
          style={styles.closeIcon}
          onPress={closeModal}
        />
        <View
          style={[
            styles.imageUpload,
            theme === "light"
              ? { backgroundColor: "#fff", shadowColor: "#000" }
              : { backgroundColor: "#f1f2f3", shadowColor: "#fff" },
          ]}
        >
          <Button
            background="#1e90ff"
            btnText="Choose Photo"
            fontSize={18}
            height={40}
            onPress={handleChoosePhoto}
          />
          <Button
            btnText="Capture Photo"
            color="#1e90ff"
            borderColor="#1e90ff"
            fontSize={18}
            borderWidth={1}
            height={40}
            onPress={handleTakePhoto}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: "center",
    gap: 30,
    zIndex: 1,
  },
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
  image: {
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 8,
  },
  img: {
    width: 200,
    height: 200,
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
  imageUploadContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderWidth: 1,
    marginTop: 25,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  imageUpload: {
    width: "80%",
    height: 70,
    borderRadius: 10,
    elevation: 10,
    flexDirection: "row",
    gap: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: { position: "absolute", top: 30, right: 10 },
});

export default PersonalInfo;
