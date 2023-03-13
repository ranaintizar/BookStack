import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import TabButton from "./TabButton";

const LibraryHeader = ({ theme, setData }) => {
  const [isActive, setIsActive] = useState({
    current_reads: true,
    archives: false,
    saved: false,
    liked: false,
  });

  const handleOnPress = (name) => {
    setData(name);
    setIsActive((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = key === name;
      });
      return newState;
    });
  };

  useEffect(() => {
    handleOnPress("saved");
  }, []);

  return (
    <View
      style={[
        styles.container,
        theme === "light"
          ? { backgroundColor: "#fff", borderColor: "#9994" }
          : { backgroundColor: "#16161a", borderColor: "#72757e" },
      ]}
    >
      <TabButton
        isActive={isActive.saved}
        title="Saved"
        theme={theme}
        width="45%"
        onPress={() => handleOnPress("saved")}
      />
      <TabButton
        isActive={isActive.liked}
        title="Liked"
        theme={theme}
        width="45%"
        onPress={() => handleOnPress("liked")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingTop: 10,
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});

export default LibraryHeader;
