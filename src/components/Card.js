import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

const Card = ({newStyles, children}) => {
  return (
    <View style={{...styles.container, ...newStyles}}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: 350,
        maxWidth: "90%",
        padding: 20,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowRadius: 10,
        shadowOpacity: 0.50,
        elevation: 4,
        borderRadius: 10,
        backgroundColor: Colors.secondary,
    },
})