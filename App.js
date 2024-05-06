import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
          <Text> Home Screen </Text>
      </View>
  );
}

const Stack = createStackNavigator();
export default function HomeScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

