import React from "react"
import { View, Text } from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 

import styles from "../Title/styles";

export default function Title() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>OneBit<Text style={{color: "#0F9D58"}}>Health</Text></Text>
      <FontAwesome style={styles.icon} name="heartbeat" size={30} color="#4285F4" />
    </View>
  )
}

