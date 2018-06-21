import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import * as Views from './_index';

const {GroupsScreen, CheckScreen, ChatsScreen, AccountScreen} = Views

// Navigation for the Tab navigator component

const TabNavigation = createBottomTabNavigator({
    Groups: GroupsScreen,
    Check: CheckScreen,
    Chats: ChatsScreen,
    Account: AccountScreen,
},
{
    initialRouteName: 'Groups',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Groups') {
          iconName = 'ios-people';
        } else if (routeName === 'Check') {
          iconName = 'md-camera';
        }else if (routeName === 'Chats') {
            iconName = 'ios-chatbubbles';
        }else if (routeName === 'Account') {
            iconName = 'ios-person';
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }, 
    tabBarOptions: {
      activeTintColor: '#722ED1',
      inactiveTintColor: 'gray',
    },
  })
})


  export default TabNavigation