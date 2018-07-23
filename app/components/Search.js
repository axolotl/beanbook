import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

// import styles
import search from '../styles/search'

class Search extends Component {
  state ={
    param: ''
  }

  render() {
    const { param } = this.state

    return (
      <View style={search.wrapper}>
        <TextInput
          placeholder='search'
          style={search.text}
          onChangeText={(param) => this.setState({param})}
          value={param}
        />
      </View>
    )
  }
}

export default Search
