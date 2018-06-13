import {createStackNavigator} from 'react-navigation'

import Main from './Main'
import Detail from './Detail'

const AccountNavigation = createStackNavigator({
    Main: { screen: Main },
    Detail: { screen: Detail },
},
{
    initialRouteName: 'Main',
})

export default AccountNavigation