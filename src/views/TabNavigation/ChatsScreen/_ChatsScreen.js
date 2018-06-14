import {createStackNavigator} from 'react-navigation'

import List from './List'
import Conversation from './Conversation'

const AccountNavigation = createStackNavigator({
    List: { 
        screen: List,
        navigationOptions: ({ navigation }) => ({
            title: 'Chats',
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