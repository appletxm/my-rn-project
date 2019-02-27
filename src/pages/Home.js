import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Home extends Component {
    constructor(props) {
        super(props)
        // this._gotoLoginPage = this._gotoLoginPage.bind(this)
        this.$gotoViewPage = this.$gotoViewPage.bind(this)
    }

    // _gotoLoginPage() {
    //     this.props.navigation.navigate('Login', {
    //         itemId: 86,
    //         otherParam: 'anything you want here',
    //     })
    // }

    $gotoViewPage() {
        this.props.navigation.navigate('MyView')
    }

    render() {
        return (
            <View>
                <Text>This is Home page</Text>
                <Button title="go to login page" onPress={() => {
                    this.props.navigation.navigate('Login', {
                        id: '8888',
                        name: 'boluo'
                    })
                }}></Button>

                <Button title="got to view page" onPress={this.$gotoViewPage} style={{'marginTop': 10}}></Button>
            </View>
        )
    }
}
