import {createStackNavigator} from 'react-navigation'

import Main from './Main'
import Detail from './Detail'

const AccountNavigation = createStackNavigator({
    Main: { 
        screen: Main,
        navigationOptions: ({ navigation }) => ({
            title: 'Account',
            headerStyle: styles.header,
            headerBackTitle: 'hey',
            headerTintColor: 'whitesmoke',
            headerTitleStyle: styles.headerTitle
          }),
    },
    Detail: { 
        screen: Detail,
        navigationOptions: ({ navigation }) => ({
            title: '[some setting]',
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: 'whitesmoke',
          }),
    },
},
{
    initialRouteName: 'Main',
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
