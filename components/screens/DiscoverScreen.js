import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DiscoverScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Discover Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
});

export default DiscoverScreen;
