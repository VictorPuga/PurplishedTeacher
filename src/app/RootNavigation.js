import React from 'react'
import { createStackNavigator } from 'react-navigation';
import * as Views from 'src/views/_index';

// This is for the first testing of auth + redux
import AuthBetaScreen from 'src/views/AuthBetaScreen'

const { AuthScreen, TabNavigation } = Views

// Root navigation for the application

// This is for the first testing of auth + redux
const AuthBeta = createStackNavigator({
    Form: {screen: AuthBetaScreen}
})

const RootNavigation = createStackNavigator({
    Auth: { screen: AuthScreen },
    Tabs: { screen: TabNavigation },
    // This is for the first testing of auth + redux
    AuthBeta: { screen: AuthBeta },
},
{
    // Instead of loading the onboarding, load the Tabs screen first.
    // Then, check if the user is authenticated, and after that
    // load the auth screen if they aren't. 
    initialRouteName: 'Tabs',
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
      },
})

export default RootNavigation



