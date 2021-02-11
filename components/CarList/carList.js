import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import cars from "./cars";
import CarItem from "../CarItems";
import styles from "./carList.style";

const CarList = () => {
  return <View style={styles.container}>
    <FlatList data={cars}
              showsVerticalScrollIndicator={false}
              snapToAlignment={"start"}
              decelerationRate={"fast"}
              snapToInterval={Dimensions.get("window").height}
              renderItem={({ item }) => <CarItem key={item.name} imageBackgroundSource={item.image}
                                                 subTitleCTA={item.taglineCTA}
                                                 onPressOrder={() => {
                                                   item.onPressOrder(item.name);
                                                 }}
                                                 onPressInventory={item.onPressInventory}
                                                 subTitle={item.tagline} title={item.name} />} />

  </View>;
};

export default CarList;
