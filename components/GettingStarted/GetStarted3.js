import React from "react";
import { View, Text } from "react-native";
import Button from "../Button";
import globalStyles from "../globalStyles";

const GetStarted3 = ({ navigation }) => {
  return (
    <View style={globalStyles.gettingStartedCont}>
      <View style={globalStyles.gettingStartedText}>
        <Text style={globalStyles.gettingStartedTitle}>
          Welcome to BookStack!
        </Text>
        <Text style={globalStyles.gettingStartedDesc}>
          To get started, simply create an account with us and start exploring
          our extensive library of books. You can also search for specific
          titles or authors using our search bar.
        </Text>
      </View>
      <View style={globalStyles.gettingStartedBtnCont}>
        <Button
          btnText="Get Started"
          iconRightSrc={require("../../assets/icon.png")}
          fontSize={22}
          borderRadius={50}
          width={270}
          background="#1e90ff"
          customClass={{ paddingVertical: 8, paddingHorizontal: 20 }}
          onPress={() =>
            navigation.navigate("SignUpFlow", {
              val: 0,
            })
          }
        />
      </View>
    </View>
  );
};

export default GetStarted3;
