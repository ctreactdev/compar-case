import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Products } from "./frontend/screens";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    PlayfairBlack: require("./assets/fonts/PlayfairDisplay-Black.ttf"),
    PlayfairReg: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
