import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { View } from 'react-native'

// import components
import Header from './components/Header'
import Login from './components/Login'
import SecondPage from './components/SecondPage'

// import styles
import global from './styles/global'

const App = () => (
  <Router>
    <View style={global.page}>
      <View style={global.pageContents}>
        <Header />
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route path="/second-page" render={props => <SecondPage {...props} />} />
      </View>
    </View>
  </Router>
)

export default App
