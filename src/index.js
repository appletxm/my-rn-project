import React, { Component } from 'react'
import AppNavigator from './router/index-create-stack-navigator'
import { createAppContainer } from 'react-navigation'

const AppContainer = createAppContainer(AppNavigator)
export default class App extends Component {
  constructor(props) {
    super(props)
    this._handleNavStateChange = this._handleNavStateChange.bind(this)
    this.navigator = null
  }

  _handleNavStateChange(prevState, newState, action) {
    // alert(JSON.stringify(prevState) + ' ==== ' + JSON.stringify(newState))
  }

  render() {
    return <AppContainer onNavigationStateChange={this._handleNavStateChange} ref={(nav) => this.navigator = nav}/>
  }
}
