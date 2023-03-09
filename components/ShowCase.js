import React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";

const ShowCase = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.bookContainer}>
              <Image source={item.src} style={styles.image} />
              <Text style={styles.bookTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    gap: 15,
  },
  title: {
    fontSize: 25,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    overflow: "scroll",
    flex: 1,
    overflow: "scroll",
  },
  bookContainer: {
    gap: 10,
    width: 140,
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 15,
    resizeMode: "cover",
  },
  bookTitle: {
    fontSize: 16,
    width: "90%",
  },
});

ShowCase.defaultProps = {
  data: [
    {
      key: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedDate: "July 11, 1960",
      isbn: "978-0446310789",
      publisher: "J. B. Lippincott & Co.",
      pages: 281,
      format: "Paperback",
      src: require("../assets/book1.jpg"),
    },
    {
      key: 2,
      title: "1984",
      author: "George Orwell",
      publishedDate: "June 8, 1949",
      isbn: "978-0451524935",
      publisher: "Signet Classics",
      pages: 328,
      format: "Paperback",
      src: require("../assets/book2.jpg"),
    },
    {
      key: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedDate: "April 10, 1925",
      isbn: "978-0743273565",
      publisher: "Scribner",
      pages: 180,
      format: "Hardcover",
      src: require("../assets/book3.jpeg"),
    },
    {
      key: 4,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      publishedDate: "October 12, 1979",
      isbn: "978-0345391803",
      publisher: "Del Rey Books",
      pages: 224,
      format: "Paperback",
      src: require("../assets/book4.png"),
    },
    {
      key: 5,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      publishedDate: "July 29, 1954",
      isbn: "978-0544003415",
      publisher: "Mariner Books",
      pages: 1178,
      format: "Paperback",
      src: require("../assets/book5.jpg"),
    },
  ],
  title: "Showcase",
};

export default ShowCase;
