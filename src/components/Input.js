import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({newStyle, ...restProps}) => {
  return (
    <TextInput style={{...styles.input, ...newStyle}} {...restProps} >
    </TextInput>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        height: 70,
        borderBottomColor: "white",
        borderBottomWidth: 2,
        marginVertical: 10,
        width: 100,
        color: "white",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "750",
    }
})