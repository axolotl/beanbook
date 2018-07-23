import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { withRouter } from 'react-router-dom'

import header from '../styles/header'

class Header extends Component {
  goto = (page) => {
    const { history } = this.props
    history.push(page)
  }

  render() {
    const { goto } = this;

    return (
      <View style={header.wrapper}>
        <Text style={header.text} onPress={() => goto('/')} >BeanBook</Text>
        <View style={header.button}>
          <Button title="Login" onPress={() => goto('/login')} />
        </View>
      </View>
    )
  }
}

export default withRouter(Header)
