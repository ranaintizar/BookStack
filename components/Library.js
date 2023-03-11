import React from "react";
import { StyleSheet, View } from "react-native";
import LibraryHeader from "./LibraryHeader";

const Library = () => {
  return (
    <View style={styles.container}>
      <LibraryHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Library;
