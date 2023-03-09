import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ShowCase from "../ShowCase";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ShowCase />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
