import React from 'react'
import { Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import TitleIcon from '../components/TitleIcon'

const RootStack = createStackNavigator(
    {
        Home: HomePage,
        Login: LoginPage,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
                height: 40
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            // headerTitle: <TitleIcon />,
            headerRight: (
                <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#2299dd"
                />
            ),
            // headerBackTitle: <TitleIcon />,
            // headerLeft : <TitleIcon />
        },
        mode: 'model',
        headerMode: 'none',
        // transitionConfig: () => ({
        //     transitionSpec: {
        //         duration: 300,
        //         easing: Easing.out(Easing.poly(4)),
        //         timing: Animated.timing,
        //     },
        //     screenInterpolator: sceneProps => {
        //         const { layout, position, scene } = sceneProps;
        //         const { index } = scene;
        
        //         const height = layout.initHeight;
        //         const translateY = position.interpolate({
        //         inputRange: [index - 1, index, index + 1],
        //         outputRange: [height, 0, 0],
        //         });
        
        //         const opacity = position.interpolate({
        //         inputRange: [index - 1, index - 0.99, index],
        //         outputRange: [0, 1, 1],
        //         });
        
        //         return { opacity, transform: [{ translateY }] };
        //     },
        // }),
    }
)
export default RootStack
