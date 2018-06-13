import {createStackNavigator} from 'react-navigation'

import List from './List'
import Conversation from './Conversation'

const AccountNavigation = createStackNavigator({
    List: { screen: List },
    Conversation: { screen: Conversation },
},
{
    initialRouteName: 'List',
})

export default AccountNavigation