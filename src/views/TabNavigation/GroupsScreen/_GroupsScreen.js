import {createStackNavigator} from 'react-navigation'

import Groups from './Groups'
import Students from './Students'
import Grades from './Grades'



const GroupNavigation = createStackNavigator({
    Groups: { 
        screen: Groups,
        navigationOptions: ({ navigation }) => ({
            title: 'Groups',
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle
        }),
        },
    Students: { 
        screen: Students,
        navigationOptions: ({ navigation }) => ({
            title: '[group name]',
            headerStyle: styles.header,
            headerTintColor: 'whitesmoke',
            headerTitleStyle: styles.headerTitle
          }), },
    Grades: { 
        screen: Grades,
        navigationOptions: ({ navigation }) => ({
            title: '[student name]',
            headerStyle: styles.header,
            headerTintColor: 'whitesmoke',
            headerTitleStyle: styles.headerTitle
          }),
    }
},
{
    initialRouteName: 'Groups',
    //headerMode: 'none',

})

export default GroupNavigation

const styles = {
    header: {
        backgroundColor: '#722ED1',
    },
    headerTitle: {
        color: 'white'
    }
}