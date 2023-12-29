import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
  container: {
    width: "70%",
    flex: 1,
    justifyContent: "center",
    gap: 20
  },

  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#C4768B",
    borderRadius: 10,
  },

  textButton: {
    textTransform: "uppercase",
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 20
  },

  formContainer: {
    display: "flex",
    gap: 15
  },

  label: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffff"
  },

  input: {
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 3,
    width: "100%",
    padding: 10,
    backgroundColor: "#fff"
  }
})