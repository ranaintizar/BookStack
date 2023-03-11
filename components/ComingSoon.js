import React from "react";
import { StyleSheet, View, Text } from "react-native";
import globalStyles from "./globalStyles";

const ComingScreen = ({ theme }) => {
  return (
    <View
      style={[
        styles.container,
        theme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#16161a" },
      ]}
    >
      <Text
        style={[
          globalStyles.comingSoon,
          theme === "light" ? { color: "#333" } : { color: "#72757e" },
        ]}
      >
        Coming Soon
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ComingScreen;
