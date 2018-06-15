import {createStackNavigator} from 'react-navigation'

import GroupList from './GroupList'
import StudentList from './StudentList'
import GradeList from './GradeList'
import GradeDetail from './GradeDetail'



const GroupNavigation = createStackNavigator({
    GroupList: { 
        screen: GroupList,
        },
    StudentList: { 
        screen: StudentList,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('group', 'Group'),
            headerStyle: styles.header,
            headerTintColor: 'whitesmoke',
            headerTitleStyle: styles.headerTitle
          }), },
    GradeList: { 
        screen: GradeList,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('student', 'Student'),
            headerStyle: styles.header,
            headerTintColor: 'whitesmoke',
            headerTitleStyle: styles.headerTitle
          }),
    },
    GradeDetail :  {
        screen: GradeDetail,
    }
},
{
    initialRouteName: 'GroupList',
    //headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: 'whitesmoke',
    }),

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