import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { navigation } = this.props
        const id = navigation.getParam('id')
        const name = navigation.getParam('name')

        console.info(id, name)

        return (
            <View>
                <Text>This is login page and get the params {id} {name}</Text>
            </View>
        )
    }
}
