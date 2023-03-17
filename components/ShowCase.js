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

const ShowCase = ({
  title,
  theme,
  horizontal,
  numOfCols,
  customClass,
  imgWidth,
  imgHeight,
  width,
  data,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(null);

  return (
    <View style={styles.container}>
      {title && (
        <Text
          style={[
            styles.title,
            theme === "light" ? { color: "#16161a" } : { color: "#fff" },
          ]}
        >
          {title}
        </Text>
      )}
      <View style={styles.content}>
        <FlatList
          contentContainerStyle={[{ gap: 15 }, customClass]}
          data={data}
          horizontal={horizontal}
          numColumns={numOfCols}
          renderItem={({ item }) => (
            <View style={[styles.bookContainer, { width: width }]}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowModal(true);
                  setContent(item);
                }}
              >
                <Image
                  source={item.imgSrc}
                  style={{
                    width: imgWidth,
                    height: imgHeight,
                    borderRadius: 15,
                  }}
                />
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
    paddingTop: 10,
    gap: 15,
    height: 220,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontFamily: "Inter",
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: "row",
    flex: 1,
  },
  bookContainer: {
    width: 145,
    alignItems: "center",
  },
});

ShowCase.defaultProps = {
  imgWidth: 130,
  imgHeight: 160,
};

export default ShowCase;
