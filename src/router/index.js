import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import MyView from '../pages/MyView'
import { createStackNavigator } from 'react-navigation'

export default createStackNavigator({
    Home: {
        screen: HomePage
    },
    Login: {
        screen: LoginPage
    },

    MyView: {
        screen: MyView
    }
})
