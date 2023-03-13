import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ShowCase from "./ShowCase";
import {
  topReadings,
  children,
  newReleases,
  bestSellers,
  recentlyAdded,
  popularFiction,
} from "./data";

const Home = ({ theme }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
          <ShowCase
            data={topReadings}
            title="Top Readings"
            theme={theme}
            horizontal={true}
          />
          <ShowCase
            data={children}
            title="Children's Books"
            theme={theme}
            horizontal={true}
          />
          <ShowCase
            data={newReleases}
            title="New Releases"
            theme={theme}
            horizontal={true}
          />
          <ShowCase
            data={bestSellers}
            title="Bestsellers"
            theme={theme}
            horizontal={true}
          />
          <ShowCase
            data={recentlyAdded}
            title="Recently Added"
            theme={theme}
            horizontal={true}
          />
          <ShowCase
            data={popularFiction}
            title="Popular Fiction"
            theme={theme}
            horizontal={true}
          />
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
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
