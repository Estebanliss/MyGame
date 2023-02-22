import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Header = ({ title, newStyle }) => {
  return (
    <SafeAreaView style={styles.header}>
      <View>
        <Text style={{ ...styles.headerTitle, ...newStyle }}>{title}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#151522",
    // height: 90,
    // padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 25,
  }
})