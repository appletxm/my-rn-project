import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Login extends Component {
    static navigationOptions = ({ navigation, navigationOptions, screenProps }) => {
        // let newNavCfg = navigationOptions || {}
        // console.info('####', navigation, navigationOptions, screenProps)
        let newNavCfg = Object.assign(navigationOptions, {
            title: navigation.getParam('title', 'no params'),
            headerRight: (
                <Button
                    onPress={navigation.getParam('increaseCount')}
                    title="+1"
                    color="#2299dd"
                />
            )
        })
        return newNavCfg
    }

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    _increaseCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount.bind(this) })
    }

    render() {
        const { navigation } = this.props
        const id = navigation.getParam('id')
        const name = navigation.getParam('name')
        const { count } = this.state

        console.info(id, name)

        return (
            <View>
                <Text>This is login page and get the params {id} {name} count: {count}</Text>
            </View>
        )
    }
}
