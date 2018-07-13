import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <View style={styles.box}>
        <Text style={styles.text}>This is the second page</Text>
        <Button title="Go back" onPress={() => history.push('/')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
})

export default App