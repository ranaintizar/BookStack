import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import LibraryHeader from "./LibraryHeader";
import ShowCase from "./ShowCase";
import data from "./data";
import { archivesData, savedData, likedData } from "./data";

const Library = ({ theme }) => {
  const [content, setContent] = useState(data);

  const getData = (name) => {
    if (name === "current_reads") {
      setContent(data);
    } else if (name === "archives") {
      setContent(archivesData);
    } else if (name === "saved") {
      setContent(savedData);
    } else if (name === "liked") {
      setContent(likedData);
    }
  };

  return (
    <View
      style={[
        styles.container,
        theme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#16161a" },
      ]}
    >
      <LibraryHeader setData={getData} theme={theme} />
      <ShowCase
        data={content}
        theme={theme}
        numOfCols={2}
        customClass={{ gap: 20, alignItems: "center" }}
        width={200}
        imgWidth={170}
        imgHeight={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Library;
