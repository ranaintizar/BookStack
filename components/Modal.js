import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
  Linking,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import Button from "./Button";
import Book from "./BookReader";

const ModalView = ({ content, theme, setShowModal }) => {
  const [data, setData] = useState({});
  const [isVisible, setIsVisible] = useState(false);

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

  const handleLike = () => {
    let likedData = (data.likedData && [...data.likedData, content]) || [
      content,
    ];
    setData({
      ...data,
      likedData: likedData,
    });
  };

  const handleSave = () => {
    let savedData = (data.savedData && [...data.savedData, content]) || [
      content,
    ];
    setData({
      ...data,
      savedData: savedData,
    });
  };

  return (
    <View
      style={[
        styles.modal,
        theme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#16161a" },
      ]}
    >
      <View style={styles.infoContainer}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <AntDesign
            name="arrowleft"
            size={24}
            color={theme === "light" ? "black" : "#f1f2f3"}
            style={styles.backIcon}
          />
        </TouchableWithoutFeedback>
        <Image source={content.imgSrc} style={styles.img} />
        <View style={styles.info}>
          <Text
            style={[
              styles.title,
              theme === "light" ? { color: "#000" } : { color: "#f1f2f3" },
            ]}
          >
            {content.title}
          </Text>
          <Text style={styles.infoTitle}>
            Author :{" "}
            <Text
              style={[
                styles.infoName,
                theme === "light" ? { color: "#16161a" } : { color: "#f1f2f3" },
              ]}
            >
              {content.authors[0].first_name +
                " " +
                content.authors[0].last_name}
            </Text>
          </Text>
          <Text style={styles.infoTitle}>
            Language :{" "}
            <Text
              style={[
                styles.infoName,
                theme === "light" ? { color: "#16161a" } : { color: "#f1f2f3" },
              ]}
            >
              {content.language}
            </Text>
          </Text>
          <Text style={styles.infoTitle}>
            Copyright Year :{" "}
            <Text
              style={[
                styles.infoName,
                theme === "light" ? { color: "#16161a" } : { color: "#f1f2f3" },
              ]}
            >
              {content.copyright_year}
            </Text>
          </Text>
          <View style={styles.infoRow}>
            <View style={styles.infoIconContainer}>
              <FontAwesome5 name="download" size={19} color="#1e90ff" />
              <Text style={styles.text}>12k</Text>
            </View>
            <TouchableOpacity onPress={handleLike}>
              <View style={styles.infoIconContainer}>
                <Ionicons name="heart-sharp" size={22} color="#1e90ff" />
                <Text style={styles.text}>1k</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.infoIconContainer}>
              <AntDesign name="clockcircle" size={19} color="#1e90ff" />
              <Text style={styles.text}>{content.totalTime}</Text>
            </View>
            <View style={styles.infoIconContainer}>
              <MaterialIcons name="star-rate" size={22} color="#1e90ff" />
              <Text style={styles.text}>4.9</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.aboutContainer}>
        <Text
          style={[
            styles.descTitle,
            theme === "light" ? { color: "#000" } : { color: "#f1f2f3" },
          ]}
        >
          Description
        </Text>
        <Text
          style={[
            styles.desc,
            theme === "light" ? { color: "#16161a" } : { color: "#f1f2f3" },
          ]}
        >
          {content.description}
        </Text>
        <View style={styles.btnContainer}>
          <Button
            color="#fff"
            background="#1e90ff"
            fontSize={22}
            width="50%"
            fontWeight="bold"
            btnText="Download"
            onPress={() => Linking.openURL(content.downloadLink)}
          />
          <Button
            color="#1e90ff"
            width="45%"
            borderWidth={1}
            borderColor="#1e90ff"
            fontSize={22}
            fontWeight="bold"
            btnText="Save"
            onPress={handleSave}
          />
        </View>
      </ScrollView>
      <Modal
        visible={isVisible}
        animationType="slide"
        statusBarTranslucent={true}
      >
        <Book setIsVisible={setIsVisible} theme={theme} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  infoContainer: {
    position: "relative",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 10,
    alignItems: "center",
  },
  backIcon: { position: "absolute", top: 10, left: 10 },
  img: {
    width: 160,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
    resizeMode: "contain",
  },
  info: {
    gap: 5,
    width: "60%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infoTitle: {
    fontSize: 16,
  },
  infoName: {
    fontWeight: "bold",
  },
  infoRow: {
    flexDirection: "row",
    gap: 15,
    marginTop: 10,
    alignItems: "center",
  },
  infoIconContainer: {
    alignItems: "center",
  },
  aboutContainer: {
    width: "100%",
    padding: 15,
    gap: 15,
  },
  descTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  desc: {
    fontFamily: "Sono",
    letterSpacing: -1,
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});

export default ModalView;
