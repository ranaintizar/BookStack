import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Profile = ({ theme }) => {
  return (
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
              theme === "light" ? { color: "#16161a" } : { color: "#72757e" },
            ]}
          >
            John Doe
          </Text>
          <Text
            style={[
              styles.username,
              theme === "light" ? { color: "#16161a" } : { color: "#72757e" },
            ]}
          >
            @johndoe
          </Text>
        </View>
      </View>
      <View style={styles.options}>
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
                theme === "light" ? { color: "#16161a" } : { color: "#fff" },
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
                theme === "light" ? { color: "#16161a" } : { color: "#fff" },
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
                theme === "light" ? { color: "#16161a" } : { color: "#fff" },
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
      </View>
    </View>
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
  options: { flex: 0.6, paddingTop: 30 },
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
});

export default Profile;
