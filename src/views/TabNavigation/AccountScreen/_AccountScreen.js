import {createStackNavigator} from 'react-navigation'

import Main from './Main'
import Detail from './Detail'

const AccountNavigation = createStackNavigator({
    Main: { 
        screen: Main,
        navigationOptions: ({ navigation }) => ({
            title: 'Account',
          }),
    },
    Detail: { 
        screen: Detail,
        navigationOptions: ({ navigation }) => ({
            title: '[some setting]',
          }),
    },
},
{
    initialRouteName: 'Main',
})

export default AccountNavigation