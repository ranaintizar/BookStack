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
        <ShowCase title="Top Readings" theme={theme} />
        <ShowCase title="Children's Books" theme={theme} />
        <ShowCase title="New Releases" theme={theme} />
        <ShowCase title="Bestsellers" theme={theme} />
        <ShowCase title="Recently Added" theme={theme} />
        <ShowCase title="Popular Fiction" theme={theme} />
        <ShowCase title="Award-Winning Titles" theme={theme} />
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
