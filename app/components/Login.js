import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

//  import styles
import login from '../styles/login'

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  submit = () => {
    // do validation here
    const { history } = this.props
    history.push('/second-page')
  }

  render() {
    const { username, password } = this.state
    const { submit } = this

    return (
      <View style={login.box}>
        <Text>Please enter username and password to log in</Text>
        <TextInput
          placeholder='username'
          style={login.input}
          onChangeText={(username) => this.setState({username})}
          value={username}
        />
        <TextInput
          placeholder='password'
          style={login.input}
          onChangeText={(password) => this.setState({password})}
          value={password}
        />
        <Button title="Login" style={login.input} onPress={submit} />
      </View>
    )
  }
}

export default Login