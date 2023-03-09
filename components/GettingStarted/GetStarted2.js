import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../Button";
import globalStyles from "../globalStyles";

const GetStarted2 = ({ setContent }) => {
  return (
    <View style={globalStyles.gettingStartedCont}>
      <View style={globalStyles.gettingStartedText}>
        <Text style={globalStyles.gettingStartedTitle}>
          Welcome to BookStack!
        </Text>
        <Text style={globalStyles.gettingStartedDesc}>
          Simplify your reading life with BookStack! Keep track of what you're
          currently reading, what you want to read, and what you've already
          read, all in one place.
        </Text>
      </View>
      <Button
        btnText="Next"
        iconRightSrc={require("../../assets/icon.png")}
        fontSize={22}
        borderRadius={50}
        width={150}
        background="#1e90ff"
        customClass={{ paddingVertical: 8, paddingHorizontal: 20 }}
        onPress={() => setContent(2)}
      />
    </View>
  );
};

export default GetStarted2;
