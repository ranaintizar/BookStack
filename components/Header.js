import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ToggleBtn from "./ToggleBtn";
import ShowCase from "./ShowCase";

const Header = ({ theme, setTheme }) => {
  const [flex, setFlex] = useState(0);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [showClearBtn, setShowClearBtn] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    AsyncStorage.getItem("data").then((value) => {
      const parsedData = JSON.parse(value);
      const combinedArray = Object.values(parsedData).reduce(
        (acc, arr) => acc.concat(arr),
        []
      );
      setData(combinedArray);
    });
  }, []);

  const submitValue = () => {
    console.log(value);
    let searchQuery = value.toLowerCase();

    const filteredBooks = data.filter((book) => {
      const titleMatches = book.title.toLowerCase().indexOf(searchQuery) !== -1;
      const authorMatches = book.authors?.some(
        (author) =>
          author.first_name.toLowerCase().indexOf(searchQuery) !== -1 ||
          author.last_name.toLowerCase().indexOf(searchQuery) !== -1
      );
      return titleMatches || authorMatches;
    });

    console.log("Start : ", filteredBooks);

    setFiltered(filteredBooks);
  };

  const showSearchModal = () => {
    setShowClearBtn(true);
    setFlex(15);
  };

  const hideSearchModal = () => {
    setValue("");
    console.log("Clear");
    setFlex(0);
    setShowClearBtn(false);
    inputRef.current.blur();
    setFiltered([]);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: flex }}>
        <View
          style={[
            styles.container,
            theme === "dark"
              ? { backgroundColor: "#16161a", borderColor: "#72757e" }
              : { backgroundColor: "#fff", borderColor: "#9997" },
          ]}
        >
          <Image
            source={
              theme === "dark"
                ? require("../assets/logo-transparent.png")
                : require("../assets/logo-transparent-2.png")
            }
            style={styles.logo}
          />
          <View style={styles.searchContainer}>
            <Entypo
              name="magnifying-glass"
              size={24}
              color={theme === "light" ? "#888" : "#72757e"}
              style={styles.searchIcon}
            />
            <TextInput
              ref={inputRef}
              placeholder="Search"
              placeholderTextColor={theme === "light" ? "#888" : "#72757e"}
              style={[
                styles.search,
                theme === "light"
                  ? { color: "#888", borderColor: "#888" }
                  : { color: "#72757e", borderColor: "#72757e" },
              ]}
              onFocus={showSearchModal}
              clearButtonMode="always"
              value={value}
              onChangeText={(val) => {
                setValue(val);
                submitValue();
              }}
            />
            {showClearBtn && (
              <Entypo
                name="cross"
                size={24}
                color={theme === "light" ? "#888" : "#72757e"}
                style={styles.clearIcon}
                onPress={hideSearchModal}
              />
            )}
          </View>
          <ToggleBtn theme={theme} setTheme={setTheme} />
        </View>
        <View style={{ flex: 1 }}>
          <ShowCase
            data={filtered}
            theme={theme}
            numOfCols={2}
            width={200}
            imgWidth={160}
            imgHeight={190}
            customClass={{ gap: 20, paddingTop: 30, paddingBottom: 20 }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  logo: {
    height: 40,
    width: 60,
  },
  searchContainer: {
    flexDirection: "row",
    width: "63%",
    height: 40,
  },
  searchIcon: {
    position: "absolute",
    top: 8,
    left: 5,
  },
  clearIcon: { position: "absolute", top: 8, right: 5 },
  search: {
    width: "100%",
    paddingHorizontal: 30,
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
