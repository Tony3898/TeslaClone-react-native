import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    height: Dimensions.get('window').height,
    width: "100%",
  },
  titleContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subTitleCTA: {
    textDecorationLine: "underline",
  },
  imageBackGround: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",

  },
  buttonGroup: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
