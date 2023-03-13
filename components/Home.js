import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShowCase from "./ShowCase";
import {
  topReadings,
  children,
  newReleases,
  bestSellers,
  recentlyAdded,
  popularFiction,
  category,
  fiction,
  short,
  classic,
  general,
  historical,
  poetry,
  savedData,
  likedData,
} from "./data";

const Home = ({ theme }) => {
  const [data, setData] = useState({
    topReadings,
    children,
    newReleases,
    bestSellers,
    recentlyAdded,
    popularFiction,
    category,
    fiction,
    short,
    classic,
    general,
    historical,
    poetry,
    savedData,
    likedData,
  });

  // const clearStorage = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     console.log("Storage successfully cleared!");
  //   } catch (error) {
  //     console.log("Error clearing storage:", error);
  //   }
  // };

  useEffect(() => {
    AsyncStorage.getItem("data").then((storedData) => {
      new Date().toLocaleString();
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("data", JSON.stringify(data));
  }, [data]);

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
            data={data.topReadings}
            title="Top Readings"
            theme={theme}
            horizontal={true}
          />
          <ShowCase
            data={data.children}
            title="Children's Books"
            theme={theme}
            horizontal={true}
          />
          <ShowCase
            data={data.newReleases}
            title="New Releases"
            theme={theme}
            horizontal={true}
          />
          <ShowCase
            data={data.bestSellers}
            title="Bestsellers"
            theme={theme}
            horizontal={true}
          />
          <ShowCase
            data={data.recentlyAdded}
            title="Recently Added"
            theme={theme}
            horizontal={true}
          />
          <ShowCase
            data={data.popularFiction}
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
