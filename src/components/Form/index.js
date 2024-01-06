import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Share } from "react-native";

import styles from "./styles";

export default Form = () => {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState(null)
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calculate")

  const onShare = async () => {
    return await Share.share({
      message: `Meu IMC hoje é: ${imc}`
    })
  }
  

  function imcCalculate() {
    let heightFormat = height.replace(",",".")
    return (weight / (heightFormat**2)).toFixed(2)
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate()
    }
  }

  function validateImc() {
    if (weight !== null && height !== null) {
      const actualImc = imcCalculate()
      setImc(actualImc)
      setMessageImc(`Your IMC: ${actualImc}`)
      setTextButton("Try Again")
      setHeight(null)
      setWeight(null)
    } else {
      setImc(null)
      verificationImc()
      setTextButton("Calculate")
      setMessageImc(null)
    }
  }

  function clearInputs() {
    setImc(null)
    setHeight(null)
    setWeight(null)
    setTextButton("Calculate")
    setMessageImc(null)
  }

  return(
    <View style={styles.container}>
      <View style={styles.formContainer}>

      <View style={styles.messageImcContainer}>
        <Text style={styles.messageImc}>{messageImc ? messageImc : "IMC CALCULATOR"}</Text>

        {imc != null && <View>
        <TouchableOpacity onPress={onShare} style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>}

      </View>

      
        
        <View>
           <Text style={styles.label}>Height</Text>
           <TextInput value={height} onChangeText={(value) => setHeight(value) } style={styles.input} placeholder="1.72" keyboardType="numeric"></TextInput>
        </View>

        <View>
           <Text style={styles.label}>Weight</Text>
           <TextInput value={weight} onChangeText={(value) => setWeight(value)} style={styles.input} placeholder="70kg" keyboardType="numeric"></TextInput>
        </View>
        

        <View style={{display: "flex", flexDirection: "row", gap: 10}}>
          <TouchableOpacity style={styles.buttonContainer} onPress={validateImc}>
             <Text style={styles.textButton}>{textButton}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={clearInputs}>
             <Text style={styles.textButton}>Clear</Text>
          </TouchableOpacity>
        </View>
        
        
      </View>
      
    </View>
  )
}


