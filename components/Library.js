import React, { useState, useEffect } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LibraryHeader from "./LibraryHeader";
import ShowCase from "./ShowCase";

const Library = ({ theme }) => {
  const [data, setData] = useState({});
  const [content, setContent] = useState();
  const [msg, setMsg] = useState(null);

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

  const getData = (name) => {
    if (name === "saved") {
      setMsg(null);
      if (data.savedData) {
        if (data.savedData.length < 1) {
          setMsg("You Have No Saved Data");
        } else {
          setMsg(null);
          setContent(data.savedData);
        }
      } else {
        setMsg("You Have No Saved Data");
      }
    } else if (name === "liked") {
      setMsg(null);
      if (data.likedData) {
        if (data.savedData.length < 1) {
          setMsg("You Have No Liked Data");
        } else {
          setMsg(null);
          setContent(data.likedData);
        }
      } else {
        setMsg("You Have No Liked Data");
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <View
        style={[
          styles.container,
          theme === "light"
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "#16161a" },
        ]}
      >
        <LibraryHeader setData={getData} theme={theme} />
        <Text style={styles.note}>
          If you're not seeing the items you saved, try restarting the app. Your
          saved items should be stored here and will be available once you
          restart
        </Text>
        {(msg && (
          <Text
            style={{
              color: "#72757e",
              fontSize: 20,
              marginTop: 300,
              textAlign: "center",
            }}
          >
            {msg}
          </Text>
        )) || (
          <ShowCase
            data={content}
            theme={theme}
            numOfCols={2}
            customClass={{ gap: 20, alignItems: "center", paddingVertical: 20 }}
            width={200}
            imgWidth={170}
            imgHeight={200}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  note: {
    color: "#72757e",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
});

export default Library;
