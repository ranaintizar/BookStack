import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../Button";
import globalStyles from "../globalStyles";

const GetStarted1 = ({ setContent }) => {
  return (
    <View style={globalStyles.gettingStartedCont}>
      <View style={globalStyles.gettingStartedText}>
        <Text style={globalStyles.gettingStartedTitle}>
          Welcome to BookStack!
        </Text>
        <Text style={globalStyles.gettingStartedDesc}>
          Welcome to our Book Downloading App! Here, you can browse and download
          a wide variety of books from different genres.
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
        onPress={() => setContent(1)}
      />
    </View>
  );
};

export default GetStarted1;
