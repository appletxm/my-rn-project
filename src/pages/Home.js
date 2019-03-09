import React, { Component } from 'react'
import { View, Text, Button, Animated } from 'react-native'
import FadeInView from '../components/FadeInView'
import AnimateTest from '../components/AnimateTest'

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props)
        // this._gotoLoginPage = this._gotoLoginPage.bind(this)
    }

    // _gotoLoginPage() {
    //     this.props.navigation.navigate('Login', {
    //         itemId: 86,
    //         otherParam: 'anything you want here',
    //     })
    // }

    render() {
        return (
            <View accessible={true}>
                <Text>This is Home page</Text>
                <Button title="go to login page" onPress={() => {
                    this.props.navigation.navigate('Login', {
                        id: '8888',
                        name: 'boluo',
                        title: 'Param title from Home Page'
                    })
                }}></Button>

                <FadeInView style={{backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
                <View style={{height: 300, backgroundColor: '#f0f0f0'}}>
                    <AnimateTest></AnimateTest>
                </View>
            </View>
        )
    }
}
