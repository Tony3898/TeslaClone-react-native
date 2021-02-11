import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./PrimaryButton.styles";

const PrimaryButton = ({
                         text,
                         onPress,
                         backgroundColor = "blue",
                         color = "white",
                         buttonStyleName,
                         buttonTextName,
                       }) => {
  return (<View style={styles.container}>
    <Pressable onPress={onPress} style={{ ...styles.button, backgroundColor, ...buttonStyleName }}>
      <Text style={{ ...styles.text, color, ...buttonTextName }}>{text}</Text>
    </Pressable>
  </View>);
};

export default PrimaryButton;
