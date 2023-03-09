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
    fontSize: 24,
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
    texDecorationLine: "underline",
  },
  form: {
    gap: 10,
    alignItems: "center",
  },
});

export default globalStyles;
