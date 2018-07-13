import React from 'react'
import { View, Text } from 'react-native'
import header from '../styles/header'

const Header = () => (
  <View style={header.wrapper}>
    <Text style={header.text}>BeanBook</Text>
  </View>
)

export default Header