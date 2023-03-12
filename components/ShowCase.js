import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import ModalView from "./Modal";
import data from "./data";

const ShowCase = ({ title, theme }) => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(null);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          theme === "light" ? { color: "#888" } : { color: "#72757e" },
        ]}
      >
        {title}
      </Text>
      <View style={styles.content}>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.bookContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowModal(true);
                  setContent(item);
                }}
              >
                <Image source={item.src} style={styles.image} />
              </TouchableWithoutFeedback>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
        {showModal && (
          <Modal
            visible={showModal}
            animationType="slide"
            statusBarTranslucent={true}
          >
            <ModalView
              content={content}
              theme={theme}
              setShowModal={setShowModal}
            />
          </Modal>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    height: 220,
  },
  title: {
    fontSize: 25,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    flex: 1,
  },
  bookContainer: {
    width: 145,
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 160,
    borderRadius: 15,
  },
});

ShowCase.defaultProps = {
  title: "Showcase",
};

export default ShowCase;
