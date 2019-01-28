import React, { Component } from 'react';
import { Text, View, Button, Alert, StyleSheet } from 'react-native';

let styleSheet

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentName: 'parent name'
    }
    this.btnPress = this.btnPress.bind(this)
  }

  btnPress() {
    Alert.alert(this.props.name)
  }

  render() {
    let {parentName} = this.state
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}! and parent is {parentName} </Text>
        <Button title={'press' + this.props.name} onPress={this.btnPress}></Button>
      </View>
    );
  }
}

styleSheet = StyleSheet.create({
  fontColor: {
    color: 'red'
  }
})

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Text style={styleSheet.fontColor}>这是红色的字体，很长的字体</Text>
      </View>
    );
  }
}
