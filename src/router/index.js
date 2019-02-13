import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import { createStackNavigator } from 'react-navigation'

export default createStackNavigator({
    Home: {
        screen: HomePage
    },
    Login: {
        screen: LoginPage
    }
})
