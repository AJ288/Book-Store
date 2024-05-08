import { View, Text, StyleSheet } from "react-native";

const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Checkout Screen</Text>
      {/* Add form fields for shipping and payment information */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CheckoutScreen;
