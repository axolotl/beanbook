import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import SecondPage from './components/SecondPage'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
     <Route path="/second-page" component={SecondPage}/>
    </div>
  </Router>
)

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
})

export default App
