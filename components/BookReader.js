import React from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";
import Book1 from "../assets/books/Book1";

const Book = ({ setIsVisible }) => {
  return (
    <View style={styles.container}>
      <Book1 />
      <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
        <Text>Close</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default Book;
