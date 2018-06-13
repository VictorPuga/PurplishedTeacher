import {createStackNavigator} from 'react-navigation'

import Groups from './Groups'
import Students from './Students'
import Grades from './Grades'

const GroupNavigation = createStackNavigator({
    Groups: { 
        screen: Groups,
        navigationOptions: ({ navigation }) => ({
            title: 'Groups',
          }),
          header: null
        },
    Students: { 
        screen: Students,
        navigationOptions: ({ navigation }) => ({
            title: 'Students',
          }), },
    Grades: { 
        screen: Grades,
        navigationOptions: ({ navigation }) => ({
            title: 'Grades',
          }),
    }
},
{
    initialRouteName: 'Groups',
})

export default GroupNavigation