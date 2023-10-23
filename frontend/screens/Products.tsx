import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { ProductCard } from "../components";

interface IProducts {
  navigation: any;
}

const Products: React.FC<IProducts> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFF" style="auto" />
          <View style={styles.header}>
            <Pressable
              style={styles.backButtonWrap}
              onPress={() => navigation.navigate("Home", { screen: "Home" })}
              accessibilityLabel="Learn more about our products"
            >
              <Image
                style={styles.backButton}
                source={require("../assets/icons/BackButton.png")}
              />
            </Pressable>
            <Text style={styles.h1}>Products For You</Text>
          </View>
          <View style={styles.h2Wrap}>
            <Text style={styles.h2}>Shampoos</Text>
          </View>
          <View style={styles.shampoosCards}>
            <ProductCard isFrontPageGap={false} />
            <ProductCard isFrontPageGap={false} />
            <ProductCard isFrontPageGap={false} />
            <ProductCard isFrontPageGap={false} />
          </View>
          <View style={styles.h2Wrap}>
            <Text style={styles.h2}>Conditioners</Text>
          </View>
          <View style={styles.shampoosCards}>
            <ProductCard isFrontPageGap={false} />
            <ProductCard isFrontPageGap={false} />
            <ProductCard isFrontPageGap={false} />
            <ProductCard isFrontPageGap={false} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 48,
    flexDirection: "row",
    marginLeft: 14,
    marginRight: 16,
    marginBottom: 13,
  },
  h1: {
    paddingTop: 4,
    display: "flex",
    width: "100%",
    height: 37,
    flexDirection: "column",
    color: "#000",
    textAlign: "center",
    fontFamily: "ProximaNovaReg",
    fontSize: 22,
    fontWeight: "700",
  },
  h2Wrap: {
    marginLeft: 15,
    height: 44,
    width: "100%",
  },
  h2: {
    color: "#000",
    fontFamily: "ProximaNovaReg",
    fontSize: 16,
    fontWeight: "700",
  },
  backButtonWrap: {
    position: "absolute",
    backgroundColor: "transparent",
    color: "transparent",
    width: 45,
    height: 45,
  },
  backButton: {},
  shampoosCards: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: 15,
  },
});

export default Products;
