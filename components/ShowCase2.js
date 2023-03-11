import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const ShowCase2 = ({ data, theme }) => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.title}
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  list: {
    gap: 20,
    paddingVertical: 25,
    borderColor: "#1e90ff",
  },
  bookContainer: { width: 200, alignItems: "center" },
  image: { width: 170, height: 200, borderRadius: 15 },
});

export default ShowCase2;
