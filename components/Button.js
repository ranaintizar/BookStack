import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const Button = ({
  btnText,
  background,
  color,
  borderRadius,
  imgSrc,
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
      <Text
        style={[
          styles.text,
          { color: color, fontSize: fontSize, fontWeight: fontWeight },
        ]}
      >
        {btnText}
      </Text>
      {imgSrc && (
        <Image source={imgSrc} style={{ width: imgWidth, height: imgHeight }} />
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
  btnText: "Button",
  variant: "filled",
  color: "#fff",
  borderRadius: 5,
  imgWidth: 18,
  imgHeight: 13,
};

export default Button;
