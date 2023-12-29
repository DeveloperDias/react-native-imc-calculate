import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function Title() {
  return(
    <View>
      <Text style={styles.text}>OneBit<Text style={{color: "#6EB385"}}>Health</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#C4768B",
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10
  }
})