import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from 'react-navigation'

import List from './List'
import Conversation from './Conversation'

const AccountNavigation = createStackNavigator({
    List: { 
        screen: List,
        navigationOptions: ({ navigation }) => ({
            title: 'Chats',
            headerStyle: styles.header,
            headerTintColor: 'whitesmoke',
            headerTitleStyle: styles.headerTitle
          }),
    },
    Conversation: { 
        screen: Conversation,
        navigationOptions: ({ navigation }) => ({
            title: 'Chat with [someone]',
            headerStyle: styles.header,
            headerTintColor: 'whitesmoke',
            headerTitleStyle: styles.headerTitle
          }),
    },
},
{
    initialRouteName: 'List',
})

export default AccountNavigation

const styles = {
    header: {
        backgroundColor: '#722ED1',
    },
    headerTitle: {
        color: 'white'
    }
}