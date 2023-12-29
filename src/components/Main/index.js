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
    height: "70%",
    width: "100%",
    backgroundColor: "#4285F4",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center"
  }
})