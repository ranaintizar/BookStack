import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ShowCase from "./ShowCase";

const Home = ({ theme }) => {
  return (
    <View
      style={[
        styles.container,
        theme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#16161a" },
      ]}
    >
      <ScrollView
        style={styles.showCaseContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        contentContainerStyle={styles.contentContainer}
      >
        <ShowCase title="Top Readings" theme={theme} horizontal={true} />
        <ShowCase title="Children's Books" theme={theme} horizontal={true} />
        <ShowCase title="New Releases" theme={theme} horizontal={true} />
        <ShowCase title="Bestsellers" theme={theme} horizontal={true} />
        <ShowCase title="Recently Added" theme={theme} horizontal={true} />
        <ShowCase title="Popular Fiction" theme={theme} horizontal={true} />
        <ShowCase
          title="Award-Winning Titles"
          theme={theme}
          horizontal={true}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 10,
    paddingTop: 20,
    gap: 10,
    paddingHorizontal: 10,
  },
});

export default Home;
