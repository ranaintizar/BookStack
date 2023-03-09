import React from "react";
import { StyleSheet, View, Text } from "react-native";

const LibraryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Library Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
});

export default LibraryScreen;
