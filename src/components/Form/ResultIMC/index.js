import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultImc({messageResultImc}) {
  return(
    <View>
      <Text style={styles.text}>{messageResultImc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "#ffff",
    fontSize: 20,
    fontWeight: "400",
    textTransform: "uppercase"
  }
})