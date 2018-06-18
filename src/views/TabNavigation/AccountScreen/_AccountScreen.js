import {createStackNavigator} from 'react-navigation'

import Main from './Main'
import Detail from './Detail'

const AccountNavigation = createStackNavigator({
    Main: { 
        screen: Main,
    },
    Detail: { 
        screen: Detail,
    },
},
{
    initialRouteName: 'Main',
    navigationOptions: ({ navigation }) => ({
        headerStyle: styles.header,
        headerTintColor: 'whitesmoke',
        headerTitleStyle: styles.headerTitle
      }),
})

export default AccountNavigation

const styles = {
    header: {
        backgroundColor: '#722ED1',
    },
    headerTitle: {
        color: 'white',
    }
}
