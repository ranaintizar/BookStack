import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  signUpFlowHeader: {
    alignItems: "center",
    gap: 8,
  },
  signUpFlowTitle: {
    fontSize: 26,
    fontWeight: 500,
    color: "#fff",
  },
  signUpFlowDesc: {
    fontSize: 16,
    color: "#fff",
  },
  signUpFlowText: {
    color: "#1e90ff",
    fontSize: 16,
    fontWeight: 600,
    textDecorationLine: "underline",
  },
  form: {
    gap: 10,
    alignItems: "center",
  },
  gettingStartedCont: {
    alignItems: "center",
    gap: 150,
  },
  gettingStartedText: {
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  gettingStartedTitle: {
    color: "#fff",
    fontSize: 22,
    width: "95%",
    fontFamily: "Sono",
    fontWeight: "bold",
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 5,
  },
  gettingStartedDesc: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "Sono",
    letterSpacing: -1,
    lineHeight: 20,
    textAlign: "center",
  },
  gettingStartedBtnCont: {
    gap: 30,
  },
  gettingStartedSignIn: {
    width: "100%",
    alignItems: "center",
    gap: 5,
  },
  gettingStartedSignInText: {
    color: "#fff",
    fontSize: 17,
  },
  comingSoon: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default globalStyles;
