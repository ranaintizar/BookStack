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

const ShowCase = ({ title, data, theme }) => {
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
          <Modal visible={showModal} animationType="slide">
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
    resizeMode: "cover",
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
      desc: "`To Kill a Mockingbird` by Harper Lee is a Pulitzer Prize-winning novel that explores themes of racial inequality, prejudice, and the loss of innocence through the eyes of a young girl in the 1930s American South. Set in the fictional town of Maycomb, Alabama, the novel follows Scout Finch as she learns about the world around her and witnesses the injustices faced by her black neighbors. Through the character of her father, the respected lawyer Atticus Finch, Lee challenges the racism and prejudice that were prevalent at the time, highlighting the importance of empathy and compassion in the face of adversity.",
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
      desc: "George Orwell is a British author best known for his works `Animal Farm` and `1984`. His writing often critiques totalitarianism and explores the impact of political ideologies on individuals and society. In `Animal Farm`, Orwell uses a group of farm animals to satirize the events leading up to the Russian Revolution and the early years of the Soviet Union. `1984`, on the other hand, imagines a dystopian future where the government has complete control over people's lives, and explores the themes of surveillance, propaganda, and the nature of truth.",
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
      desc: "`The Great Gatsby` by F. Scott Fitzgerald is a classic American novel that portrays the decadence and excess of the 1920s Jazz Age. Set in the fictional town of West Egg on Long Island, the novel follows the mysterious and enigmatic Jay Gatsby as he tries to win back his lost love, Daisy Buchanan. Through Gatsby's lavish parties and extravagant lifestyle, Fitzgerald explores the themes of wealth, social class, and the corruption of the American Dream. The novel is known for its lyrical prose and vivid depictions of the era, as well as its commentary on the disillusionment and moral decay of the time.",
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
      desc: "`The Hitchhiker's Guide to the Galaxy` by Douglas Adams is a comedic science fiction series that follows the misadventures of an unwitting human named Arthur Dent and his alien friend Ford Prefect as they travel through space and time. The series is known for its irreverent humor, quirky characters, and satirical take on science fiction tropes. Adams uses the series to explore philosophical questions and poke fun at the absurdities of life, all while entertaining readers with his offbeat humor and zany plotlines.",
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
      desc: "`The Lord of the Rings` is a beloved and epic high-fantasy novel written by J.R.R. Tolkien. It tells the story of a hobbit named Frodo Baggins, who embarks on a perilous journey to destroy the One Ring, a powerful artifact that holds the fate of Middle-earth in its grasp. Alongside his loyal friends and allies, Frodo faces numerous challenges and battles against ferocious enemies such as orcs, trolls, and dark wizards, while navigating through treacherous terrains, including mines and marshes.",
    },
  ],
  title: "Showcase",
};

export default ShowCase;
