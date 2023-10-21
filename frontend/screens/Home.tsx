import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
interface IHome {
  navigation: any;
}

const Home: React.FC<IHome> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.logowrap}>
          <Text style={styles.logo}>compar</Text>
        </View>
        <View style={styles.bellWrap}>
          <Image
            style={styles.bellIcon}
            source={require("../public/icons/NotificationsBell.png")}
          />
        </View>
        <View style={styles.snapshotWrap}>
          <Image
            style={styles.snapshotIcon}
            source={require("../public/icons/BackButton.png")}
          />
        </View>
      </View>

      <Button
        onPress={() => navigation.navigate("Products")}
        title="See More"
        color="#841584"
        accessibilityLabel="Learn more about our products"
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 48,
    flexDirection: "row",
    marginLeft: 16,
    marginRight: 14,
  },
  logowrap: {
    display: "flex",
    width: 96,
    height: 35.39,
  },
  logo: {
    color: "#8E6F56",
    textAlign: "center",
    fontFamily: "PlayfairBlack",
    fontSize: 26,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
  },
  bellWrap: {
    width: 25,
    height: 25,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  bellIcon: {
    width: 25,
    height: 25,
    flexShrink: 0,
  },
  snapshotWrap: {},
  snapshotIcon: {},
});
export default Home;
