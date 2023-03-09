import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import GetStarted1 from "../GettingStarted/GetStarted1";
import GetStarted2 from "../GettingStarted/GetStarted2";
import GetStarted3 from "../GettingStarted/GetStarted3";

const GetStartedScreen = ({ navigation }) => {
  const [showGetStarted, setContent] = useState(0);

  const getContent = () => {
    switch (showGetStarted) {
      case 0:
        return <GetStarted1 setContent={setContent} />;
      case 1:
        return <GetStarted2 setContent={setContent} />;
      case 2:
        return <GetStarted3 navigation={navigation} setContent={setContent} />;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-transparent.png")}
        style={styles.logo}
      />
      <View style={styles.dotContainer}>
        <View
          style={[
            styles.dot,
            showGetStarted === 0 && { backgroundColor: "#1e90ff" },
            showGetStarted === 2 && { bottom: 80 },
          ]}
        ></View>
        <View
          style={[
            styles.dot,
            showGetStarted === 1 && { backgroundColor: "#1e90ff" },
            showGetStarted === 2 && { bottom: 80 },
          ]}
        ></View>
        <View
          style={[
            styles.dot,
            showGetStarted === 2 && { backgroundColor: "#1e90ff" },
            showGetStarted === 2 && { bottom: 80 },
          ]}
        ></View>
      </View>
      {getContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    width: "100%",
    backgroundColor: "#333",
    padding: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 100,
  },
  dotContainer: {
    position: "absolute",
    flexDirection: "row",
    gap: 10,
    bottom: 220,
  },
  dot: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: "#1e90ff",
    borderRadius: 10,
  },
});

export default GetStartedScreen;
