import React from "react";
import { Button, View } from "react-native";
import ComingSoon from "./ComingSoon";

const Book = ({ theme, setIsVisible }) => {
  return (
    <View style={{ flex: 1 }}>
      <ComingSoon theme={theme} />
      <Button title="Close" onPress={() => setIsVisible(false)} />
    </View>
  );
};

export default Book;
