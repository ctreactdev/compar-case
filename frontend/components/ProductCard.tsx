import { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

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
interface IProductCard {
  isFrontPage: boolean;
  productData: IProductData[];
}

const ProductCard: React.FC<IProductCard> = ({ isFrontPage, productData }) => {
  const [likes, setLikes] = useState(() => productData.map(() => false));

  const toggleLike = (index: number) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = !updatedLikes[index];
    setLikes(updatedLikes);
  };
  return (
    <View style={styles.productsContainer}>
      {productData.map((product: IProductData, index) => {
        function getCharactersByNumber(input: string, limit: number): string {
          const words = input.split(/\s+/);
          let characterCount = 0;

          const includedWords = words.filter((word) => {
            if (characterCount + word.length + 1 <= limit) {
              characterCount += word.length + 1;
              return true;
            }
            return false;
          });

          return includedWords.join(" ").trim();
        }

        const descriptionWordCap: string = getCharactersByNumber(
          product.description,
          35
        );
        const nameWordCap: string = getCharactersByNumber(
          product.product_name,
          20
        );
        return (
          <View
            key={product.product_id}
            style={[styles.container, isFrontPage && styles.frontPageContainer]}
          >
            <View style={styles.imgWrap}>
              <Image style={styles.img} source={{ uri: product.image_url }} />

              <Pressable style={styles.heart} onPress={() => toggleLike(index)}>
                <Image
                  style={{ width: 14, height: 12 }}
                  source={
                    likes[index]
                      ? require("../assets/icons/blackHeart.png")
                      : require("../assets/icons/whiteHeart.png")
                  }
                />
              </Pressable>
            </View>
            <View style={styles.info}>
              <View style={styles.titleDescriptionWrap}>
                <Text style={styles.title}>{nameWordCap}</Text>
                <Text style={styles.description}>{descriptionWordCap}</Text>
              </View>
              <View style={styles.priceProcentageSale}>
                <Text style={styles.price}>{product.price} kr</Text>
                <View style={styles.procentageSaleWrap}>
                  <Text style={styles.procentageSale}>72% Match</Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  container: {
    width: 160,
    height: 206,
    marginRight: 20,
    marginBottom: 39,
  },
  frontPageContainer: {
    marginRight: 6,
    marginBottom: 0,
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
    flexShrink: 0,
  },
  titleDescriptionWrap: {
    paddingLeft: 12,
    paddingRight: 10,
    width: 160,
    flexShrink: 0,
  },
  title: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 14.4,
    fontStyle: "normal",
    letterSpacing: 0.24,
  },
  description: {
    marginTop: 4,
    lineHeight: 12,
    letterSpacing: 0.24,
    fontSize: 12,
    fontWeight: "300",
    fontStyle: "normal",
  },
  priceProcentageSale: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    marginTop: 7.53,
    marginLeft: 13,
    marginRight: 10,
    marginBottom: 14,
    fontSize: 12,
    fontWeight: "600",
  },
  procentageSaleWrap: {
    position: "relative",
    left: 25,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    height: 20,
    width: 70,

    marginTop: 6.53,
    marginBottom: 9,
    marginRight: 14.18,
    borderRadius: 10,
    backgroundColor: "#8E6F56",
  },
  procentageSale: {
    color: "#FFF",
    fontSize: 10,
  },
});

export default ProductCard;
