import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Welcome to BrewBook!</Text>
        <Text>Please log in</Text>
        <Link to="/second-page">Login</Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
})

export default App