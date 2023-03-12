import React from "react";
import { StyleSheet, View, Text } from "react-native";
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
        <View style={globalStyles.gettingStartedSignIn}>
          <Text style={globalStyles.gettingStartedSignInText}>
            Already have an account?
          </Text>
          <Button
            borderColor="#1e90ff"
            borderWidth={3}
            borderRadius={50}
            width={270}
            fontSize={22}
            fontWeight="bold"
            color="#1e90ff"
            customClass={{
              paddingHorizontal: 20,
              justifyContent: "center",
            }}
            btnText="Sign In"
            onPress={() =>
              navigation.navigate("SignUpFlow", {
                val: 1,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default GetStarted3;
