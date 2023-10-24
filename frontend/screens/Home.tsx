import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { ProductCard } from "../components";
import { fetchData } from "../api";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";

interface IHome {
  navigation: StackNavigationProp<RootStackParamList, "Products">;
}

const Home: React.FC<IHome> = ({ navigation }) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />

        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>compar</Text>
          </View>

          <View style={styles.headerIcons}>
            <Image
              style={styles.bellIcon}
              source={require("../assets/icons/NotificationsBell.png")}
              accessibilityLabel="notifications"
            />

            <Image
              style={styles.snapshotIcon}
              source={require("../assets/icons/Snapshot.png")}
            />
          </View>
        </View>

        <View style={styles.ProductsWrap}>
          <Text style={styles.ProductsText}>Products For You</Text>
          <Pressable
            style={styles.seeMoreButton}
            onPress={() => navigation.navigate("Products")}
            accessibilityLabel="Learn more about our products"
          >
            <Text>See More</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          style={styles.yourProducts}
          showsHorizontalScrollIndicator={false}
        >
          <ProductCard isFrontPage={true} productData={data} />
        </ScrollView>

        <View style={styles.trending}>
          <Text style={styles.trendingText}>Trending</Text>
          <Image
            style={styles.trendingImage}
            source={require("../assets/images/RosemaryOil.png")}
          />
        </View>

        <View style={styles.BeautyForYouWrap}>
          <View style={styles.BeautyForYou}>
            <Text style={styles.BeautyForYouText}>Beauty For You</Text>
            <Pressable
              style={styles.seeMoreButton}
              onPress={() => navigation.navigate("Products")}
              accessibilityLabel="Learn more about our products"
            >
              <Text style={styles.seeMoreButtonBeauty}>See More</Text>
            </Pressable>
          </View>
          <View style={styles.BeautyForYouImagesWrap}>
            <Image
              style={styles.BeautyForYouImage1}
              source={require("../assets/images/girl1.png")}
              accessibilityLabel="notifications"
            />
            <Image
              style={styles.BeautyForYouImage2}
              source={require("../assets/images/girl2.png")}
              accessibilityLabel="notifications"
            />
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
    justifyContent: "space-between",
    height: 48,
    flexDirection: "row",
    marginLeft: 16,
    marginRight: 14,
  },
  headerIcons: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    color: "#8E6F56",
    textAlign: "center",
    fontFamily: "PlayfairBlack",
    fontSize: 27,
    fontStyle: "normal",
    fontWeight: "700",
  },
  bellIcon: {
    width: 25,
    height: 25,
    flexShrink: 0,
    marginRight: 17,
  },
  snapshotIcon: {
    width: 50,
    height: 50,
    flexShrink: 0,
  },

  ProductsWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 52,
    width: "100%",
    marginBottom: 18,
  },
  ProductsText: {
    color: "#000",
    fontFamily: "PlayfairBlack",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 15,
    letterSpacing: -0.24,
  },
  seeMoreButton: {
    marginRight: 21,
    fontSize: 11,
    fontWeight: "300",
    fontFamily: "ProximaNovaReg",
  },
  yourProducts: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 35,
  },
  trending: {
    marginLeft: 15,
    marginBottom: 44,
  },
  trendingText: {
    fontFamily: "PlayfairBlack",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: -0.24,
    marginBottom: 15,
  },
  trendingImage: {
    width: 346,
    height: 130,
    flexShrink: 0,
  },
  BeautyForYouWrap: {
    width: "100%",
    height: 228,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: "#F7F5F3",
  },
  BeautyForYou: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  BeautyForYouText: {
    marginTop: 17,
    color: "#000",
    fontFamily: "PlayfairBlack",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 15,
    letterSpacing: -0.24,
  },
  seeMoreButtonBeauty: {
    marginTop: 23,
  },
  BeautyForYouImagesWrap: {
    display: "flex",
    flexDirection: "row",
  },
  BeautyForYouImage1: {
    width: 160,
    height: 160,
    flexShrink: 0,
    marginLeft: 15,
  },
  BeautyForYouImage2: {
    width: 160,
    height: 160,
    flexShrink: 0,
    marginLeft: 24,
  },
});
export default Home;
