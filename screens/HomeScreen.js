import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=react%20native"
      );
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const navigateToDetail = (book) => {
    navigation.navigate("BookDetail", { book });
  };

  const navigateToCart = () => {
    navigation.navigate("Cart");
  };

  const renderBookItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => navigateToDetail(item)}
    >
      <Image
        source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
        style={styles.bookImage}
        resizeMode="cover"
      />
      <Text style={styles.bookTitle}>{item.volumeInfo.title}</Text>
      <Text style={styles.bookAuthor}>{item.volumeInfo.authors}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cartButton} onPress={navigateToCart}>
        <Text style={styles.cartButtonText}>Cart</Text>
      </TouchableOpacity>
      <FlatList
        data={books}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  bookItem: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: "#666",
  },
  cartButton: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 1, 
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 8,
  },
  cartButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;
