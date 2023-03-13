import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Modal,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Button from "./Button";
import PersonalInfo from "./PersonalInfo";

const Profile = ({ theme }) => {
  const [slideAnimation, setSlideAnimation] = useState(new Animated.Value(0));
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => {
    Animated.spring(slideAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
              John Doe
            </Text>
            <Text
              style={[
                styles.username,
                theme === "light" ? { color: "#16161a" } : { color: "#fff" },
              ]}
            >
              @johndoe
            </Text>
          </View>
        </View>
        <View style={styles.options}>
          <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
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
          <TouchableWithoutFeedback onPress={() => console.log("Button")}>
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
          <TouchableWithoutFeedback onPress={handleShow}>
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
            Log out?
          </Text>
          <View style={styles.divider}></View>
          <Button
            btnText="Yes"
            background="#1e90ff"
            fontSize={20}
            width={250}
            customClass={{ marginVertical: 5 }}
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
  },
  confirmTitle: {
    fontSize: 20,
  },
  divider: {
    width: "80%",
    height: 2,
    backgroundColor: "#72757e",
  },
});

export default Profile;
