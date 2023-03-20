import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";

const InputField = ({ theme, label, val, handleChange, name }) => {
  return (
    <TouchableWithoutFeedback onLongPress={() => handleChange(name)}>
      <View style={styles.field}>
        <Text
          style={[
            styles.fieldName,
            theme === "light" ? { color: "#16161a" } : { color: "#f1f2f3" },
          ]}
        >
          {label}
        </Text>
        <Text style={styles.fieldVal}>{val}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  field: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#3333",
    paddingBottom: 5,
  },
  fieldName: { padding: 10, fontSize: 20, fontWeight: "bold", width: "30%" },
  fieldVal: {
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 600,
    width: "70%",
    color: "#72757e",
  },
});

InputField.defaultProps = {
  label: "First Name",
  val: "Rana",
  name: "fname",
};

export default InputField;
