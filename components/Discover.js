import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ShowCase2 from "./ShowCase2";
import { category } from "./data";

const Discover = ({ theme }) => {
  return (
    <View
      style={[
        { flex: 1 },
        theme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#16161a" },
      ]}
    >
      <ShowCase2
        title="Browse"
        data={category}
        imgWidth={190}
        imgHeight={70}
        gap={20}
        theme={theme}
        label="Horror"
        handleOnPress={(val) => console.log(val)}
        customClass={{
          justifyContent: "space-between",
          flex: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Discover;
