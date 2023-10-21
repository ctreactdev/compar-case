import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
interface IProducts {
  navigation: any;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const Products: React.FC<IProducts> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Products!</Text>

      <StatusBar style="auto" />
    </View>
  );
};
export default Products;
