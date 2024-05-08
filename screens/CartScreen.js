import { View, Text, FlatList, StyleSheet } from "react-native";

const CartScreen = ({ route }) => {
  const cartItems = route.params?.cartItems || [];

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.volumeInfo.title}</Text>
            <Text>{item.volumeInfo.authors}</Text>
            <Text>
              {/* Add other item details like price, quantity, etc. */}
            </Text>
          </View>
        )}
      />
      {/* Add total price and checkout button */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default CartScreen;
