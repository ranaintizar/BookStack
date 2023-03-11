import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import LibraryHeader from "./LibraryHeader";
import ShowCase2 from "./ShowCase2";
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
      <ShowCase2 data={content} theme={theme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Library;
