import React from "react";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from "react-native";
import ResultImc from "./ResultIMC";

export default Form = () => {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
  const [imc, setImc] = useState(0)
  const [textButton, setTextButton] = useState("calcular")

  function imcCalculate() {
    setImc((weight / (height**2)).toFixed(2))
  }

  function validateImc() {
    if (weight !== "" && height !== "" && weight !== null && height !== null) {
      imcCalculate()
      setMessageImc(`Seu IMC é igual a ${imc}`)
      setTextButton("Calcular novamente")
      setHeight(null)
      setWeight(null)
      return
    }
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
  }

  function clearInputs() {
    setHeight(null)
    setWeight(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
  }

  return(
    <View style={styles.container}>
      <View style={styles.formContainer}>
        
        <Text style={styles.label}>Altura</Text>
        <TextInput value={height} onChangeText={(value) => setHeight(value) } style={styles.input} placeholder="Ex: 1,72" keyboardType="numeric"></TextInput>

        <Text style={styles.label}>Peso</Text>
        <TextInput value={weight} onChangeText={(value) => setWeight(value)} style={styles.input} placeholder="Ex: 69,2" keyboardType="numeric"></TextInput>

        <Button title="Limpar" onPress={clearInputs}/>

        <TouchableOpacity style={styles.buttonContainer} onPress={validateImc}>
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
        
        
      </View>

      <View>
        <ResultImc messageResultImc={messageImc}/>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
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
