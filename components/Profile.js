import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Modal,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firebase } from "../firebase.config";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Button from "./Button";
import PersonalInfo from "./PersonalInfo";

const Profile = ({ theme, handleLogout }) => {
  const [slideAnimation, setSlideAnimation] = useState(new Animated.Value(0));
  const [isVisible, setIsVisible] = useState(false);
  const [scaleValue, setScaleValue] = useState(0);
  const [onConfirm, setOnConfirm] = useState();
  const [label, setLabel] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    AsyncStorage.getItem("userinfo")
      .then((item) => {
        const user = JSON.parse(item);
        setUser(user);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleShow = (opt) => {
    Animated.spring(slideAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();

    if (opt === "logout") {
      setOnConfirm("logout");
      setLabel("Logout ?");
    } else if (opt === "del") {
      setOnConfirm("delete");
      setLabel("Delete ?");
    }
  };

  const handleHide = () => {
    Animated.spring(slideAnimation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const slideUp = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const handleDelete = () => {
    firebase
      .auth()
      .currentUser?.delete()
      .then(() => console.log("User Deleted"));
    const collectionRef = firebase.firestore().collection("acc-del-reqs");

    handleLogout(false);

    collectionRef
      .add({
        email: user.email,
        uid: user.uid,
        fname: user.fname,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .then(() =>
        AsyncStorage.clear().then(() => console.log("Data cleared!"))
      );

    Alert.alert(
      "Request Submited",
      "We acknowledge that you have requested for the deletion of your account. We are currently processing your request and will notify you once the deletion is completed.",
      [
        {
          text: "Ok",
        },
      ]
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleHide();
        Keyboard.dismiss();
      }}
    >
      <View
        style={[
          { flex: 1 },
          theme === "light"
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "#16161a" },
        ]}
      >
        <View style={styles.userInfo}>
          <Image
            source={require("../assets/Profile-Pic.jpg")}
            style={styles.img}
          />
          <View style={styles.nameContainer}>
            <Text
              style={[
                styles.name,
                theme === "light" ? { color: "#16161a" } : { color: "#fff" },
              ]}
            >
              {user.fullName}
            </Text>
            <Text
              style={[
                styles.username,
                theme === "light" ? { color: "#16161a" } : { color: "#fff" },
              ]}
            >
              {user.username}
            </Text>
          </View>
        </View>
        <View style={styles.options}>
          <TouchableWithoutFeedback
            onPress={() => {
              handleHide();
              setIsVisible(true);
            }}
          >
            <View style={styles.option}>
              <View style={styles.optionName}>
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={theme === "light" ? "black" : "#fff"}
                />
                <Text
                  style={[
                    styles.optionTitle,
                    theme === "light"
                      ? { color: "#16161a" }
                      : { color: "#fff" },
                  ]}
                >
                  Personal Information
                </Text>
              </View>
              <MaterialIcons
                name="navigate-next"
                size={26}
                color={theme === "light" ? "black" : "#fff"}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              handleHide();
              setScaleValue(1);
            }}
          >
            <View style={styles.option}>
              <View style={styles.optionName}>
                <Ionicons
                  name="ios-settings-outline"
                  size={24}
                  color={theme === "light" ? "black" : "#fff"}
                />
                <Text
                  style={[
                    styles.optionTitle,
                    theme === "light"
                      ? { color: "#16161a" }
                      : { color: "#fff" },
                  ]}
                >
                  Settings
                </Text>
              </View>
              <MaterialIcons
                name="navigate-next"
                size={26}
                color={theme === "light" ? "black" : "#fff"}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleShow("logout")}>
            <View style={styles.option}>
              <View style={styles.optionName}>
                <MaterialIcons
                  name="logout"
                  size={24}
                  color={theme === "light" ? "black" : "#fff"}
                />
                <Text
                  style={[
                    styles.optionTitle,
                    theme === "light"
                      ? { color: "#16161a" }
                      : { color: "#fff" },
                  ]}
                >
                  Logout
                </Text>
              </View>
              <MaterialIcons
                name="navigate-next"
                size={26}
                color={theme === "light" ? "black" : "#fff"}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleShow("del")}>
            <View style={styles.option}>
              <View style={styles.optionName}>
                <MaterialIcons name="delete" size={24} color="red" />
                <Text style={[styles.optionTitle, { color: "red" }]}>
                  Delete Account
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={26} color="red" />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Animated.View
          style={[
            styles.confirmDialog,
            {
              position: "absolute",
              bottom: 0,
              left: "10%",
              transform: [{ translateY: slideUp }],
            },
            theme === "light"
              ? { backgroundColor: "#0009" }
              : { backgroundColor: "#f1f2f3" },
          ]}
        >
          <Text
            style={[
              styles.confirmTitle,
              theme === "light" ? { color: "#fff" } : { color: "#72757e" },
            ]}
          >
            {label}
          </Text>
          <View style={styles.divider}></View>
          <Button
            btnText="Yes"
            background="#1e90ff"
            fontSize={20}
            width={250}
            customClass={{ marginVertical: 5 }}
            onPress={() => {
              if (onConfirm === "logout") {
                firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    handleLogout(true);
                    console.log("Succesfully logged out");
                  });
              } else if (onConfirm === "delete") {
                handleDelete();
                handleLogout(true);
              }
            }}
          />
          <View style={styles.divider}></View>
          <Button
            btnText="No"
            borderWidth={2}
            borderColor="#1e90ff"
            color="#1e90ff"
            fontSize={20}
            width={250}
            customClass={{ paddingVertical: 2 }}
            onPress={handleHide}
          />
        </Animated.View>
        <Modal visible={isVisible} statusBarTranslucent={true}>
          <PersonalInfo theme={theme} showModal={setIsVisible} />
        </Modal>
        <View
          style={[
            styles.modal,
            theme === "light"
              ? { backgroundColor: "#fff", shadowColor: "#000" }
              : { backgroundColor: "#f1f2f3", shadowColor: "#fff" },
            { transform: [{ scale: scaleValue }], transformOrigin: "center" },
          ]}
        >
          <Text
            style={[
              styles.note,
              theme === "light" ? { color: "#16161a" } : { color: "#72757e" },
            ]}
          >
            We're in the process of building the settings section. Stay tuned
            for updates on its progress!
          </Text>
          <Button
            btnText="Ok"
            background="#1e90ff"
            fontSize={20}
            width={150}
            onPress={() => setScaleValue(0)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    padding: 10,
    flex: 0.45,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
  },
  nameContainer: {
    alignItems: "center",
  },
  img: { width: 150, height: 150, borderRadius: 100 },
  name: {
    fontSize: 20,
    fontWeight: 600,
  },
  username: {
    fontSize: 18,
  },
  options: { flex: 0.6, paddingTop: 10 },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionName: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  optionTitle: { fontSize: 22 },

  confirmDialog: {
    position: "absolute",
    bottom: 0,
    width: "80%",
    height: 200,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#0009",
    zIndex: 10,
  },
  confirmTitle: {
    fontSize: 20,
  },
  divider: {
    width: "80%",
    height: 2,
    backgroundColor: "#72757e",
  },
  modal: {
    position: "absolute",
    left: 20,
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 10,
    borderRadius: 10,
    top: "40%",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
  note: {
    fontSize: 18,
  },
});

export default Profile;
