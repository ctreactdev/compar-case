import React, { useEffect, useState } from "react";
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
import { fetchData } from "../api";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";
interface IProducts {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}
interface IProductData {
  brand: string;
  category: string;
  description: string;
  image_url: string;
  ingredients: string;
  price: number;
  product_id: number;
  product_name: string;
}

const Products: React.FC<IProducts> = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("products")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);
  const products: IProductData[] = data;

  const categoryToFilterConditioner = "Balsam";
  const categoryToFilterShampoo = "Hårshampoo";

  const filteredShampoo = products.filter(
    (product) => product.category === categoryToFilterShampoo
  );
  const filteredConditioner = products.filter(
    (product) => product.category === categoryToFilterConditioner
  );

  const shampooArray = filteredShampoo.slice(0);
  const conditionersArray = filteredConditioner.slice(0);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFF" style="auto" />
          <View style={styles.header}>
            <Pressable
              style={styles.backButtonWrap}
              onPress={() => navigation.navigate("Home")}
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
            <ProductCard productData={shampooArray} isFrontPage={false} />
          </View>

          <View style={styles.h2Wrap}>
            <Text style={styles.h2}>Conditioners</Text>
          </View>

          <View style={styles.shampoosCards}>
            <ProductCard productData={conditionersArray} isFrontPage={false} />
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
    paddingTop: 13,
    height: 48,
    flexDirection: "row",
    marginLeft: 14,
    marginRight: 16,
    marginBottom: 13,
  },
  h1: {
    paddingRight: 75,
    width: "100%",
    textAlign: "center",
    height: 37,
    color: "#000",
    fontFamily: "PlayfairBlack",
    fontStyle: "normal",
    lineHeight: 24,
    fontSize: 22,
    fontWeight: "700",
  },
  h2Wrap: {
    marginLeft: 15,
    height: 52,
    width: "100%",
  },
  h2: {
    color: "#000",
    fontFamily: "PlayfairBlack",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: -0.24,
    fontStyle: "normal",
    lineHeight: 24,
  },
  backButtonWrap: {
    width: 45,
    height: 45,
  },
  backButton: {
    width: 22.5,
    height: 22.5,
    flexShrink: 0,
  },
  shampoosCards: {
    marginLeft: 15,
  },
});

export default Products;
