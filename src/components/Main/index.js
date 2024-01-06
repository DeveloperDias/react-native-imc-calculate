import React from "react";
import Form from "../Form";
import { View, Pressable, Keyboard, StyleSheet } from "react-native";

export default Main = () => {
  return(
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Form/>
    </Pressable>
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