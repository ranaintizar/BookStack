import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

const LibraryHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
});

export default LibraryHeader;
