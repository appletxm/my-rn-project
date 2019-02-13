import React, { Component } from 'react'
import AppNavigator from './router/index'
import { createAppContainer } from 'react-navigation'

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <AppContainer/>
  }
}
