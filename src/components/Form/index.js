import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import ResultImc from "./ResultIMC";
import styles from "./styles";

export default Form = () => {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Type your height/weight")
  const [imc, setImc] = useState(0)
  const [textButton, setTextButton] = useState("Calculate")

  function imcCalculate() {
    setImc((weight / (height**2)).toFixed(2))
  }

  function validateImc() {
    if (weight !== "" && height !== "" && weight !== null && height !== null) {
      imcCalculate()
      setMessageImc(`Seu IMC é igual a ${imc}`)
      setTextButton("Try Again")
      setHeight(null)
      setWeight(null)
      return
    }
    setTextButton("Calculate")
    setMessageImc("Type your height/weight")
  }

  function clearInputs() {
    setHeight(null)
    setWeight(null)
    setTextButton("Calculate")
    setMessageImc("Type your height/weight")
  }

  return(
    <View style={styles.container}>
      <View style={styles.formContainer}>
        
        <Text style={styles.label}>Height</Text>
        <TextInput value={height} onChangeText={(value) => setHeight(value) } style={styles.input} placeholder="Ex: 1,72" keyboardType="numeric"></TextInput>

        <Text style={styles.label}>Weight</Text>
        <TextInput value={weight} onChangeText={(value) => setWeight(value)} style={styles.input} placeholder="Ex: 69,2" keyboardType="numeric"></TextInput>

        <Button title="Clear" onPress={clearInputs}/>

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


