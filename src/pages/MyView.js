import React, { Component } from 'react'
import { WebView } from 'react-native'

export default class MyView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{flex: 1}}
      />
    )
  }
}