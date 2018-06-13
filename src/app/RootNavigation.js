import React from 'react'
import { createStackNavigator } from 'react-navigation';
import * as Views from 'src/views/_index';

const { OnboardingScreen, TabNavigation } = Views

// Root navigation for the application

const RootNavigation = createStackNavigator({
    Onboarding: { screen: OnboardingScreen },
    Tabs: { screen: TabNavigation }
},
{
    // Instead of loading the onboarding, load the Tabs screen first.
    // Then, check if the user is authenticated, and after that
    // load the onboarding if they aren't. 
    initialRouteName: 'Onboarding',
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
      },
})

export default RootNavigation



