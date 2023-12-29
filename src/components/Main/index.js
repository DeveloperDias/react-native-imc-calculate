import React from "react";
import Form from "../Form";
import { View, StyleSheet } from "react-native";

export default Main = () => {
  return(
    <View style={styles.container}>
      <Form/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "65%",
    width: "100%",
    backgroundColor: "#333",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    justifyContent: "center",
    alignItems: "center"
  }
})