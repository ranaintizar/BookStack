import React from "react";
import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const BackgroundImage = ({ src, child, blurRadius, customClass }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={src}
        style={{
          flex: 1,
          minWidth: "100%",
          justifyContent: "center",
          alignItems: "center",

          ...customClass,
        }}
        blurRadius={blurRadius}
      >
        {child}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default BackgroundImage;
