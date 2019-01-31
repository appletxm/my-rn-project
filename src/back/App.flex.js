import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Alert, Button } from 'react-native';

let styleSheet = StyleSheet.create({
  container1: {
    width: '100%',
    height: 200
  },
  container3:{
    width: '100%',
    height: 50,
    backgroundColor: 'gray'
  },
  innerFlex1: {
    flex: 1,
    flexDirection: 'column', //row
    justifyContent: 'space-between',
  },
  container2: {
    marginTop: 10,
    width: '100%',
    height: 200
  },
  innerFlex2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  innerFlex3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})

export default class JustifyContentBasics extends Component {
  constructor(pros) {
    super(pros)
    this.state = {
      text: ''
    }
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.$handelPress = this.$handelPress.bind(this)
  }

  handleChangeText(value) {
    // Alert.alert('you already input:' + value)
    this.setState({text: value})
  }

  handleChange(event) {
    // Alert.alert('you already input:' + event.text)
    let {text} = event
    this.setState({text})
  }

  $handelPress() {
    Alert.alert('but press event')
  }

  render() {
    let {text} = this.state
    return (
      <View>
        <View style={styleSheet.container3}>
          <View style={styleSheet.innerFlex2}>
            <TextInput style={{color: 'green', backgroundColor: 'white', width: '60%'}} placeholder="please input xxx" onChangeText={this.handleChangeText}></TextInput>
            <Button style={{width: '40%', height: 100, lineHeight: 100}} title="press on it" onPress={this.$handelPress}></Button>
          </View>
        </View>
        <View style={styleSheet.container1}>
          <View style={styleSheet.innerFlex1}>
            <View style={{width: '100%', height: '30%', backgroundColor: 'powderblue'}}><Text>column {text}</Text></View>
            <View style={{width: '100%', height: '40%', backgroundColor: 'skyblue'}} />
            <View style={{width: '100%', height: '30%', backgroundColor: 'steelblue'}} />
          </View>
        </View>

        <View style={styleSheet.container2}>
          <View style={styleSheet.innerFlex2}>
            <View style={{width: '50%', height: '100%', backgroundColor: 'powderblue'}}><Text>row</Text></View>
            <View style={{width: '20%', height: '100%', backgroundColor: 'skyblue'}} />
            <View style={{width: '30%', height: '100%', backgroundColor: 'steelblue'}} />
          </View>
        </View>

        <View style={styleSheet.container2}>
          <View style={styleSheet.innerFlex3}>
            <View style={{width: '20%', height: '20%', backgroundColor: 'powderblue'}} />
            <View style={{width: '20%', height: '20%', backgroundColor: 'skyblue'}} />
            <View style={{width: '20%', height: '20%', backgroundColor: 'steelblue'}} />
          </View>
        </View>
      </View>
    );
  }
}
