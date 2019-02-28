import React, { Component } from 'react'
import { WebView } from 'react-native'

export default class MyView extends Component {
  constructor(props) {
    super(props)

    this.$onload = this.$onload.bind(this)
    this.$onloadEnd = this.$onloadEnd.bind(this)
    this.$onMessage = this.$onMessage.bind(this)
    this.$renderError = this.$renderError.bind(this)
    this.$onError = this.$onError.bind(this)
  }

  $onload() {
    alert('web view onload')
  }

  $onloadEnd() {
    alert('web view onLoadEnd')
  }

  $onMessage(arg) {
    alert('web view onMessage:' + JSON.stringify(arg))
  }

  $renderError(error) {
    alert('error:' + JSON.stringify(error))
  }

  $onError(error) {
    alert('error:' + JSON.stringify(error))
  }

  render() {
    return (
      <WebView
        // source={{uri: 'https://github.com/facebook/react-native'}}
        source={{uri: 'http://127.0.0.1:9000/test.html'}}
        style={{flex: 1}}
        userAgent="txm user agent"
        // injectedJavaScript="alert(1111); window.txm='123456'"
        onLoad={this.$onload}
        onLoadEnd={this.$onloadEnd}
        onMessage={this.$onMessage}
        // renderError={this.$renderError}
        onError={this.$onError}
        startInLoadingState={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}
      />
    )
  }
}