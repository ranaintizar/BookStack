import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const Button = ({
  onPress,
  btnText,
  background,
  color,
  borderRadius,
  iconLeftSrc,
  iconRightSrc,
  imgWidth,
  imgHeight,
  fontSize,
  fontWeight,
  borderColor,
  borderWidth,
  width,
  height,
  customClass,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: background,
          borderRadius: borderRadius,
          borderColor: borderColor,
          borderWidth: borderWidth,
          width: width,
          height: height,
          ...customClass,
        },
      ]}
    >
      {iconLeftSrc && (
        <Image
          source={iconLeftSrc}
          style={{ width: imgWidth, height: imgHeight }}
        />
      )}
      <Text
        style={[
          styles.text,
          { color: color, fontSize: fontSize, fontWeight: fontWeight },
        ]}
      >
        {btnText}
      </Text>
      {iconRightSrc && (
        <Image
          source={iconRightSrc}
          style={{ width: imgWidth, height: imgHeight }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: "Inter",
  },
});

Button.defaultProps = {
  onPress: () => console.log("Button Pressed"),
  btnText: "Button",
  variant: "filled",
  color: "#fff",
  borderRadius: 5,
  imgWidth: 18,
  imgHeight: 13,
};

export default Button;
