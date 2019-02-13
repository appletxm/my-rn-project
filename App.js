import React, { Component } from 'react'
import AppContainer from './src/index'
import { View, Button } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return <AppContainer style={{flex: 1}}></AppContainer>
  }
}
