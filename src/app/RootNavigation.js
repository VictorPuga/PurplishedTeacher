import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import * as Views from 'src/views/_index';

const { OnboardingScreen, ChatsScreen, GroupsScreen, CameraScreen, AccountScreen } = Views

// Navigation for the Tab navigator component

const TabNavigation = createBottomTabNavigator({
    Groups: GroupsScreen,
    Camera: CameraScreen,
    Chats: ChatsScreen,
    Account: AccountScreen,
})



// Root navigation for the application
const RootNavigation = createStackNavigator({
    Onboarding: { screen: OnboardingScreen },
    Tabs: { screen: TabNavigation }
},
{
    initialRouteName: 'Onboarding',
})

export default RootNavigation

