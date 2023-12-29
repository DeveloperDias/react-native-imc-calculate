import React from "react";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import ResultImc from "./ResultIMC";

export default Form = () => {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("calcular")

  function imcCalculate() {
    return setImc((IMC) => {
      IMC = (height * height / weight).toFixed(2)
    })
  }

  function validateImc() {
    if (weight !== null && height !== null) {
      imcCalculate()

      setHeight(null)
      setWeight(null)

      setMessageImc(`Seu IMC é igual a ${imc}`)
      setTextButton("Calcular novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
  }

  return(
    <View style={styles.container}>
      <View style={styles.formContainer}>
        
        <Text style={styles.label}>Altura</Text>
        <TextInput onChangeText={(value) => console.log(value) } style={styles.input} placeholder="Ex: 1.72" keyboardType="numeric"></TextInput>

        <Text style={styles.label}>Peso</Text>
        <TextInput style={styles.input} placeholder="Ex: 1.72" keyboardType="numeric"></TextInput>

        <TouchableOpacity style={styles.buttonContainer} onPress={validateImc}>
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
        
      </View>

      <View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
  },

  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
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
