import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const TabButton = ({
  title,
  customClass,
  isActive,
  width,
  height,
  theme,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(title);
      }}
      style={[
        styles.container,
        { ...customClass, width: width, height: height },
        isActive ? { borderColor: "#1e90ff" } : { borderColor: "transparent" },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: theme === "light" ? "#16161a" : "#72757e" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 20 },
});

TabButton.defaultProps = {
  title: "Button",
};

export default TabButton;
