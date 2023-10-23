import { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

interface IProductCard {
  isFrontPageGap: boolean;
}

const ProductCard: React.FC<IProductCard> = ({ isFrontPageGap }) => {
  const [like, setLike] = useState(false);
  return (
    <View
      style={[styles.container, isFrontPageGap && styles.frontPageContainer]}
    >
      <View style={styles.imgWrap}>
        <Image
          style={styles.img}
          source={require("../assets/images/shampoo.png")}
        />
        {like ? (
          <Pressable style={styles.heart} onPress={() => setLike(false)}>
            <Image
              style={{ width: 14, height: 12 }}
              source={require("../assets/icons/blackHeart.png")}
            />
          </Pressable>
        ) : (
          <Pressable style={styles.heart} onPress={() => setLike(true)}>
            <Image
              style={{ width: 14, height: 12 }}
              source={require("../assets/icons/whiteHeart.png")}
            />
          </Pressable>
        )}
      </View>
      <View style={styles.info}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>HairBurst</Text>
          <Text style={styles.description}>Shampoo For Curly, Wavy Hair</Text>
        </View>
        <View style={styles.textBottom}>
          <Text style={styles.price}>117 kr</Text>
          <View style={styles.procentageSaleWrap}>
            <Text style={styles.procentageSale}>72% Match</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 206,
    marginBottom: 39,
    marginRight: 20,
  },
  frontPageContainer: {
    marginRight: 6,
  },
  imgWrap: {
    height: 116,
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 90,
    height: 90,
  },
  heart: {
    position: "absolute",
    right: 0,
  },
  info: {
    height: 90,
    borderRadius: 20,
    backgroundColor: "#F7F5F3",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
  },
  textWrap: {
    marginTop: 10,
    marginLeft: 12,
  },
  title: {
    fontSize: 12,
    fontWeight: "400",
  },
  description: {
    fontSize: 12,
    fontWeight: "300",
  },
  textBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    marginTop: 7.53,
    marginLeft: 13,
    fontSize: 12,
    fontWeight: "600",
  },
  procentageSale: {
    color: "#FFF",
    fontSize: 10,
  },
  procentageSaleWrap: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    height: 20,
    width: 70,
    marginTop: 7.53,
    marginRight: 14.18,
    borderRadius: 10,
    backgroundColor: "#8E6F56",
  },
});

export default ProductCard;
