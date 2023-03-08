import { StyleSheet, ImageBackground, View, Text, Image } from "react-native";
import Button from "./Button";

const GetStarted = () => {
  return (
    <ImageBackground
      source={require("../assets/getting-started.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/logo-transparent.png")}
          style={styles.logo}
        />
        <View style={styles.text}>
          <Text style={styles.title}>Welcome to BookStack!</Text>
          <Text style={styles.desc}>
            Get started by discovering new books and organizing your reading
            list with ease.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            btnText="Get Started"
            imgSrc={require("../assets/icon.png")}
            fontSize={22}
            borderRadius={50}
            width={270}
            background="#1e90ff"
            customClass={{ paddingVertical: 8, paddingHorizontal: 20 }}
          />
          <View style={styles.signIn}>
            <Text style={styles.signInText}>Already have an account?</Text>
            <Button
              variant="bordered"
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
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 100,
  },
  text: {
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    width: "95%",
    fontFamily: "Sono",
    fontWeight: "bold",
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 5,
  },
  desc: {
    color: "#fff",
    fontSize: 17,
    width: "95%",
    fontFamily: "Sono",
    letterSpacing: -1,
    lineHeight: 20,
    textAlign: "center",
  },
  btnContainer: {
    gap: 30,
  },
  signIn: {
    width: "100%",
    alignItems: "center",
    gap: 5,
  },
  signInText: {
    color: "#fff",
    fontSize: 17,
  },
});

export default GetStarted;
