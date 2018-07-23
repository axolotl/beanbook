import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { View } from 'react-native'

// import components
import Home from './components/Home'
import Header from './components/Header'
//import Search from './components/Search'
import Login from './components/Login'
import SecondPage from './components/SecondPage'

// import styles
import global from './styles/global'

const App = () => (
  <Router>
    <View style={global.page}>
      <View style={global.pageContents}>
        <Header />

        {/* <Search /> search to be added later*/}
        
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/second-page" render={props => <SecondPage {...props} />} />
      </View>
    </View>
  </Router>
)

export default App
