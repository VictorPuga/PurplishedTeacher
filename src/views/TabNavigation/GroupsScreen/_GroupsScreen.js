import {createStackNavigator} from 'react-navigation'

import GroupList from './GroupList'
import StudentList from './StudentList'
import AssignmentList from './AssignmentList'
import AssignmentDetail from './AssignmentDetail'



const GroupNavigation = createStackNavigator({
    GroupList: { 
        screen: GroupList,
        },
    StudentList: { 
        screen: StudentList,
    },
    AssignmentList: { 
        screen: AssignmentList,
    },
    AssignmentDetail :  {
        screen: AssignmentDetail,
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