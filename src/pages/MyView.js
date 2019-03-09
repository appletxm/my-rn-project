import React, { Component } from 'react'
import { WebView, View, TouchableHighlight, Text } from 'react-native'

export default class MyView extends Component {
  constructor(props) {
    super(props)

    this.webview = null
    this.$onload = this.$onload.bind(this)
    this.$onloadEnd = this.$onloadEnd.bind(this)
    this.$onMessage = this.$onMessage.bind(this)
    this.$renderError = this.$renderError.bind(this)
    this.$onError = this.$onError.bind(this)
    this.$sendPostMessage = this.$sendPostMessage.bind(this)
  }

  $onload() {
    console.info('web view onload')
  }

  $onloadEnd() {
    console.info('web view onLoadEnd')
  }

  $onMessage(event) {
    alert('app recieve:' + event.nativeEvent.data)
    // console.info('web view onMessage:', event.nativeEvent.data)
    let data = JSON.parse(event.nativeEvent.data)
  }

  $renderError(event) {
    // console.info('error:', event)
  }

  $onError(event) {
    // console.info('error:', event)
  }

  $sendPostMessage() {
    console.log('Sending post message')
    this.webview.postMessage(JSON.stringify({'a':666, b: 555}), '*')
  }

  componentDidMount() {
    // setTimeout(() => {
    //   alert('will send message to browser')
    //   this.webview.postMessage('88888')
    // }, 6000)
  }

  render() {
    return (
      <View style={{flex:1}}>
        <TouchableHighlight style={{padding: 10, backgroundColor: 'orange'}} onPress={this.$sendPostMessage}>
          <Text style={{color: 'white'}}>Send post message from react native</Text>
        </TouchableHighlight>
        <WebView
        // source={{uri: 'https://github.com/facebook/react-native'}}
        source={{uri: 'http://10.70.30.167:9000'}}
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
        ref={webview => this.webview = webview}
      />
      </View>
    )
  }
}