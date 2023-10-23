import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  const [loaded] = useFonts({
    PlayfairBlack: require("./frontend/assets/fonts/PlayfairDisplay-Black.ttf"),
    PlayfairReg: require("./frontend/assets/fonts/PlayfairDisplay-Regular.ttf"),
    ProximaNovaBlack: require("./frontend/assets/fonts/ProximaNova-Black.ttf"),
    ProximaNovaReg: require("./frontend/assets/fonts/ProximaNova-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
export default App;
