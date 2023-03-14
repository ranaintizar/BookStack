import React, { useState } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ToggleBtn from "./ToggleBtn";

const Header = ({ theme, setTheme }) => {
  const [val, setValue] = useState("");

  const submitValue = () => {
    console.log(val);
  };

  return (
    <View
      style={[
        styles.container,
        theme === "dark"
          ? { backgroundColor: "#16161a", borderColor: "#72757e" }
          : { backgroundColor: "#fff", borderColor: "#9997" },
      ]}
    >
      <Image
        source={
          theme === "dark"
            ? require("../assets/logo-transparent.png")
            : require("../assets/logo-transparent-2.png")
        }
        style={styles.logo}
      />
      <View style={styles.searchContainer}>
        <Entypo
          name="magnifying-glass"
          size={24}
          color={theme === "light" ? "#888" : "#72757e"}
          style={styles.icon}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={theme === "light" ? "#888" : "#72757e"}
          style={[
            styles.search,
            theme === "light"
              ? { color: "#888", borderColor: "#888" }
              : { color: "#72757e", borderColor: "#72757e" },
          ]}
          onChangeText={(val) => setValue(val)}
        />
      </View>
      <ToggleBtn theme={theme} setTheme={setTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  logo: {
    height: 40,
    width: 60,
  },
  searchContainer: {
    flexDirection: "row",
    width: "63%",
    height: 40,
  },
  icon: {
    position: "absolute",
    top: 8,
    left: 10,
  },
  search: {
    width: "100%",
    paddingLeft: 40,
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 20,

    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
