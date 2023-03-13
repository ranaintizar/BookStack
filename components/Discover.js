import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ShowCase2 from "./ShowCase2";
import ShowCase from "./ShowCase";
import Button from "./Button";
import data, { category } from "./data";

const Discover = ({ theme }) => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(data);
  const [value, setValue] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={[
          { flex: 1 },
          theme === "light"
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "#16161a" },
        ]}
      >
        <View
          style={[
            styles.container,
            theme === "light"
              ? { backgroundColor: "#fff" }
              : { backgroundColor: "#16161a" },
          ]}
        >
          <Text
            style={[
              styles.title,
              theme === "light" ? { color: "#16161a" } : { color: "#fff" },
            ]}
          >
            Discover something new
          </Text>
          <View style={styles.labelContainer}>
            <Button
              borderWidth={2}
              borderColor={theme === "light" ? "#17171a" : "#f1f2f3"}
              borderRadius={50}
              color={theme === "light" ? "#16161a" : "#f1f2f3"}
              fontSize={22}
              btnText="Popular Listens"
              customClass={{ paddingHorizontal: 20, paddingVertical: 4 }}
              onPress={() => {
                setValue("Popular Listens");
                setShowModal(true);
              }}
            />

            <Button
              borderWidth={2}
              borderColor={theme === "light" ? "#17171a" : "#f1f2f3"}
              borderRadius={50}
              color={theme === "light" ? "#16161a" : "#f1f2f3"}
              fontSize={22}
              btnText="New Releases"
              customClass={{ paddingHorizontal: 20, paddingVertical: 4 }}
              onPress={() => {
                setValue("New Releases");
                setShowModal(true);
              }}
            />
            <Button
              borderWidth={2}
              borderColor={theme === "light" ? "#17171a" : "#f1f2f3"}
              borderRadius={50}
              color={theme === "light" ? "#16161a" : "#f1f2f3"}
              fontSize={22}
              btnText="Trending"
              customClass={{ paddingHorizontal: 20, paddingVertical: 4 }}
              onPress={() => {
                setValue("Trending");
                setShowModal(true);
              }}
            />
            <Button
              borderWidth={2}
              borderColor={theme === "light" ? "#17171a" : "#f1f2f3"}
              borderRadius={50}
              color={theme === "light" ? "#16161a" : "#f1f2f3"}
              fontSize={22}
              btnText="Top Rated"
              customClass={{ paddingHorizontal: 20, paddingVertical: 4 }}
              onPress={() => {
                setValue("Top Rated");
                setShowModal(true);
              }}
            />
          </View>
        </View>
        <ShowCase2
          title="Browse"
          data={category}
          imgWidth={190}
          imgHeight={70}
          gap={20}
          theme={theme}
          label="Horror"
          handleOnPress={(val) => {
            setValue(val.label);
            setShowModal(true);
          }}
          customClass={{
            justifyContent: "space-between",
          }}
        />
        <Modal visible={showModal} statusBarTranslucent={true}>
          <View
            style={[
              styles.modal,
              theme === "light"
                ? { backgroundColor: "#fff" }
                : { backgroundColor: "#16161a" },
            ]}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={theme === "light" ? "black" : "#f1f2f3"}
              style={styles.backIcon}
              onPress={() => setShowModal(false)}
            />
            <ShowCase
              title={value}
              data={content}
              theme={theme}
              numOfCols={2}
              customClass={{ gap: 20, alignItems: "center" }}
              width={200}
              imgWidth={170}
              imgHeight={200}
            />
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.45,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  labelContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    padding: 10,
    marginTop: 5,
  },
  modal: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  backIcon: { position: "absolute", top: 20, left: 10 },
});

export default Discover;
