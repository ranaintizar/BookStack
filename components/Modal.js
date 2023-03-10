import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import {
  FontAwesome5,
  Ionicons,
  Foundation,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import Button from "./Button";

const ModalView = ({ content, theme, setShowModal }) => {
  return (
    <View style={styles.modal}>
      <View style={styles.infoContainer}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={styles.backIcon}
          />
        </TouchableWithoutFeedback>
        <Image source={content.src} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.title}>{content.title}</Text>
          <Text style={styles.infoTitle}>
            Author : <Text style={styles.infoName}>{content.author}</Text>
          </Text>
          <Text style={styles.infoTitle}>
            Publisher : <Text style={styles.infoName}>{content.publisher}</Text>
          </Text>
          <Text style={styles.infoTitle}>
            Published on :{" "}
            <Text style={styles.infoName}>{content.publishedDate}</Text>
          </Text>
          <View style={styles.infoRow}>
            <View style={styles.infoIconContainer}>
              <FontAwesome5 name="book-reader" size={20} color="#1e90ff" />
              <Text style={styles.text}>12k</Text>
            </View>
            <View style={styles.infoIconContainer}>
              <Ionicons name="heart-sharp" size={22} color="#1e90ff" />
              <Text style={styles.text}>1k</Text>
            </View>
            <View style={styles.infoIconContainer}>
              <Foundation name="page-multiple" size={20} color="#1e90ff" />
              <Text style={styles.text}>280</Text>
            </View>
            <View style={styles.infoIconContainer}>
              <MaterialIcons name="star-rate" size={22} color="#1e90ff" />
              <Text style={styles.text}>4.9</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.divider}></View>
      <ScrollView contentContainerStyle={styles.aboutContainer}>
        <Text style={styles.descTitle}>Description</Text>
        <Text style={styles.desc}>{content.desc}</Text>
        <View style={styles.btnContainer}>
          <Button
            color="#fff"
            background="#1e90ff"
            fontSize={22}
            width="50%"
            fontWeight="bold"
            btnText="Start Reading"
          />
          <Button
            color="#1e90ff"
            width="45%"
            borderWidth={1}
            borderColor="#1e90ff"
            fontSize={22}
            fontWeight="bold"
            btnText="Save"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  infoContainer: {
    position: "relative",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 10,
    alignItems: "center",
  },
  backIcon: { position: "absolute", left: 10 },
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
    color: "#72757e",
    fontSize: 16,
  },
  infoName: {
    fontWeight: "bold",
    color: "#16161a",
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
  text: {
    color: "#72757e",
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "#72757e",
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
    color: "#16161a",
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
