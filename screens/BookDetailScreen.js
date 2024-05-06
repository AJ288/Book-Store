import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.volumeInfo.title}</Text>
      <Text style={styles.author}>{book.volumeInfo.authors}</Text>
      <Text style={styles.description}>{book.volumeInfo.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default BookDetailScreen;
