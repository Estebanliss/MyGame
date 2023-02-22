import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Colors from '../constants/Colors'

const GameScreens = ({handleResult}) => {
    const [currentGuess, setCurrentGuess] = useState()

    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
    }, [])

    return (
        <View style={styles.container}>
            <Card>
                <Text style={styles.title}>Possible number</Text>
                <Text style={styles.numberSelected}>{currentGuess}</Text>
                <View style={styles.buttonContainer} >
                    <Pressable
                        style={[styles.buttonActions, styles.confirmButton]}
                        onPress={() => handleResult("lower", currentGuess)}
                    >
                        <Text style={styles.textButtons}>Lower</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.buttonActions, styles.confirmButton]}
                        onPress={() => handleResult("higher", currentGuess)}
                    >
                        <Text style={styles.textButtons}>Higher</Text>
                    </Pressable>

                </View>
            </Card>
        </View>
    )
}

export default GameScreens

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: Colors.primary,
    },

    title: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
        color: "white",
    },

    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 20,
    },

    buttonActions: {
        height: 50,
        width: 130,
        borderRadius: 15,
        textAlign: "center",
        justifyContent: "center"
    },

    confirmButton: {
        backgroundColor: Colors.actionColor,
    },

    textButtons: {
        textAlign: "center",
        color: "white",
        fontWeight: "700",
    },

    numberSelected: {
        color: "white",
        fontSize: 60,
        fontWeight: "950",
        textAlign: "center",
    }



})