import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from 'react-navigation'

import List from './List'
import Conversation from './Conversation'

const AccountNavigation = createStackNavigator({
    List: { 
        screen: List,
    },
    Conversation: { 
        screen: Conversation,
    },
},
{
    initialRouteName: 'List',
    navigationOptions: ({ navigation }) => ({
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: 'whitesmoke',
    }),
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