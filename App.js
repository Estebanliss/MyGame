import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import Header from './src/components/Header';
import StartGameScreens from './src/screens/StartGameScreens';
import GameScreens from './src/screens/GameScreens';
import ResultScreens from './src/screens/ResultScreens';


export default function App() {
  const [loaded] = useFonts({
    PhuduRegular: require("./src/assets/fonts/Phudu-Regular.ttf"),
    PhuduSemiBold: require("./src/assets/fonts/Phudu-SemiBold.ttf"),
    PhuduBlack: require("./src/assets/fonts/Phudu-Black.ttf"),
  })
  const [userNumber, setUserNumber] = useState()
  const [winOrLose, setWintOrLose] = useState(false)
  const [result, setResult] = useState("")

  const handleStartGame = (valueSelected) => {
    setUserNumber(valueSelected)
  }

  const handleFinishGame = (seleccionado, number) => {
    if (
    (seleccionado === "lower" && userNumber < number) ||
    (seleccionado === "higher" && userNumber > number)) {
      setResult("Win")
      console.log("Win")
    } else {
      setResult("Lose")
      console.log("Lose")
    }
    setWintOrLose(true)
  }





  let content = <StartGameScreens onStartGame={handleStartGame} />

  if (userNumber && winOrLose === true) {
    content = <ResultScreens result={result} />
  } else if (userNumber) {
    content = <GameScreens handleResult={handleFinishGame} />
  }

  if (!loaded) {
    return null
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={"Guess a number"} newStyle={{ fontFamily: "PhuduBlack" }} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
