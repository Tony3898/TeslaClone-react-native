import React from "react";
import { ImageBackground, Text, View } from "react-native";
import styles from "./carItem.style";
import PrimaryButton from "../PrimaryButton";

const CarItem = ({ imageBackgroundSource, title, subTitle,subTitleCTA,onPressOrder,onPressInventory }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={imageBackgroundSource} style={styles.imageBackGround} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{`${subTitle} `}<Text style={styles.subTitleCTA}>{subTitleCTA}</Text></Text>
      </View>
      <View style={styles.buttonGroup}>
        <PrimaryButton text="Custom Order" backgroundColor="#171A20CC" color="#FFF" onPress={onPressOrder}
                       buttonStyleName={{ borderRadius: 25 }} buttonTextName={{ fontWeight: "500" }} />
        <PrimaryButton text="Existing Inventory" backgroundColor="#FFFFFFA6" color="#171A20" onPress={onPressInventory}
                       buttonStyleName={{ borderRadius: 25 }} buttonTextName={{ fontWeight: "500" }} />
      </View>
    </View>
  );
};

export default CarItem;
