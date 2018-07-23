import React, { Component } from 'react'
import { View, Text } from 'react-native'

// graphql
import Test from '../queries/test'

// import styles
import home from '../styles/home'

class Home extends Component {
  render() {
    return (
      <View style={home.container}>
        <Test />
      </View>
    )
  }
}

export default Home