import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import win from "../assets/images/Win.png"
import lose from "../assets/images/Over.png"
import Card from '../components/Card'
import Colors from '../constants/Colors'


const ResultScreens = ({ result }) => {

    const [image, setImage] = useState("")

    useEffect(() => {
        handleImage()
    }, [])

    const handleImage = () => {
        if (result === "Win") {
            setImage(win)
            return
        }
        setImage(lose)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Card>
                    <Text>{`You ${result}`}</Text>
                </Card>
                <Image style={styles.imageContainer} source={image} />
            </View>
        </SafeAreaView>
    )
}

export default ResultScreens

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
    },
    imageContainer: {
        height: 320,
        width: 320,
        marginTop: 50,
    }

})