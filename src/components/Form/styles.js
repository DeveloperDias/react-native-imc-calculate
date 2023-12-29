import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
  container: {
    width: "80%",
    flex: 1,
    justifyContent: "center",
    gap: 20
  },

  buttonContainer: {
    display: "flex",
    flexGrow: 1,
    width: "auto",
    padding: 20,
    backgroundColor: "#0F9D58",
    borderRadius: 10,
  },

  textButton: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 20,
  },

  formContainer: {
    display: "flex",
    gap: 20
  },

  label: {
    paddingBottom: 5,
    fontWeight: "medium",
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff"
  },

  input: {
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 3,
    padding: 15,
    backgroundColor: "#fff"
  }
})