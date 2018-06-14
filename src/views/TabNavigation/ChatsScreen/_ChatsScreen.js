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
            headerRight: <Button title="New" onPress={()=>console.log()}/>,
            headerLeft: <Button title="Edit" onPress={()=>console.log()}/>,
          }),
    },
    Conversation: { 
        screen: Conversation,
        navigationOptions: ({ navigation }) => ({
            title: 'Chat with [someone]',
          }),
    },
},
{
    initialRouteName: 'List',
})

export default AccountNavigation