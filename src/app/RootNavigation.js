import React from 'react'
import { createSwitchNavigator } from 'react-navigation';
import * as Views from 'src/views';

const { AuthNavigation, TabNavigation } = Views

// Root navigation for the application

// const RootNavigation = createSwitchNavigator({
//     Auth: { screen: AuthNavigation },
//     Tabs: { screen: TabNavigation },
// },
// {
//     // Instead of loading the onboarding, load the Tabs screen first.
//     // Then, check if the user is authenticated, and after that
//     // load the auth screen if they aren't. 
//     initialRouteName: 'Auth',
//     headerMode: 'none',
//     navigationOptions: {
//         gesturesEnabled: false,
//     },
// })

const createRootNavigation = (signedIn = false) => {
    return createSwitchNavigator({
        Auth: { screen: AuthNavigation },
        Tabs: { screen: TabNavigation },
    },
    {
        // Instead of loading the onboarding, load the Tabs screen first.
        // Then, check if the user is authenticated, and after that
        // load the auth screen if they aren't. 
        initialRouteName: signedIn ? "Tabs" : "Auth",
        headerMode: 'none',
    })
}


export default createRootNavigation