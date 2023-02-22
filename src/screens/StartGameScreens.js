import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Pressable,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    Platform,
    ScrollView
} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/Colors.js'
import Input from '../components/Input'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const os = Platform.OS

const StartGameScreens = ({ onStartGame }) => {
    const [value, setValue] = useState("")
    const [confirmed, setConfirmed] = useState(false)
    const [valueSelected, setValueSelected] = useState("")

    useEffect(() => {
        console.log(width, height, os)
    }, [])



    const handleInput = (text) => {
        console.log(text)
        setValue(text.replace(/[^0-9]/g, ""))
    }

    const handleResetInput = () => {
        setValue("")
    }

    const handleValueSelected = () => {
        const newValue = parseInt(value)
        if (newValue === NaN || newValue <= 0 || newValue > 99) return

        setConfirmed(true)
        setValueSelected(newValue)
        setValue("")
        Keyboard.dismiss()
        console.log("Este es el valor seleccionado", valueSelected)
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={os === "ios" ? "padding" : "height"}>
            <ScrollView style={{backgroundColor: Colors.primary}}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Star Game</Text>
                        <Card>
                            <Text style={styles.subTitle}>Chose a number</Text>
                            <Input
                                blurOnSubmit
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="numeric"
                                maxLength={2}
                                value={value}
                                onChangeText={handleInput}
                            />
                            <View style={styles.buttonContainer} >
                                <Pressable
                                    style={[styles.buttonActions, styles.cleanButton]}
                                    onPress={() => handleResetInput()}
                                >
                                    <Text style={styles.textButtons}>Clean</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.buttonActions, styles.confirmButton]}
                                    onPress={() => handleValueSelected()}
                                >
                                    <Text style={styles.textButtons}>Confirm</Text>
                                </Pressable>
                            </View>
                        </Card>
                        {confirmed &&
                            (<Card newStyles={styles.containerNumber}>
                                <Text style={styles.titleNumber}>Your number is:</Text>
                                <Text style={styles.numberSelected}>{valueSelected}</Text>
                                <Pressable
                                    style={[styles.buttonActions, styles.confirmButton]}
                                    onPress={() => onStartGame(valueSelected)}
                                >
                                    <Text style={styles.textButtons}>Start Game</Text>
                                </Pressable>
                            </Card>)
                        }
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default StartGameScreens

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: Colors.primary,
    },
    title: {
        color: "white",
        fontSize: 20,
        marginVertical: 10,
    },
    subTitle: {
        color: "white",
    },
    buttonContainer: {
        flexDirection: "row",
        width: width < 400 ? "100%" : 320,
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

    cleanButton: {
        backgroundColor: Colors.disableColor
    },

    confirmButton: {
        backgroundColor: Colors.actionColor,
    },

    textButtons: {
        textAlign: "center",
        color: "white",
        fontWeight: "700",
    },

    containerNumber: {
        marginTop: 50,
        width: "70%",
    },

    titleNumber: {
        color: "white",
        fontSize: 14,
        textAlign: "center",
    },

    numberSelected: {
        color: "white",
        fontSize: 60,
        fontWeight: "950",
        textAlign: "center",
    }

})