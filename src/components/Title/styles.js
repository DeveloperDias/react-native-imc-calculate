import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4285F4",
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10
  },

  container: {
    position: "relative"  
  },

  icon: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 50,
    top: -15,
    left: -15,
    position: "absolute"
  }
})

export default styles