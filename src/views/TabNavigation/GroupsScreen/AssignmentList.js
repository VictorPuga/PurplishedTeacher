import React from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Aux} from 'src/global/hoc'

import globalStyles from 'src/global/styles'

class GradeList extends React.Component {
    state = {
        grades: [
            { assignment: 'Activity 1', grade: '90' },
            { assignment: 'Activity 2', grade: '92' },
            { assignment: 'Activity 3', grade: '92' },
            { assignment: 'Activity 4', grade: '86' },
            { assignment: 'Activity 5', grade: '90' },
            { assignment: 'Activity 6', grade: '89' },
            { assignment: 'Activity 7', grade: '91' },
            { assignment: 'Activity 8', grade: '87' },
            { assignment: 'Activity 9', grade: '100' },
        ],
        refreshing: false,
        loading: false,
    }
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('student', 'Assignments'),
        };
      };

    renderSeparator = () => <View style={styles.separator}/>
    renderEmptyComponent = () => {
        return(
            <SafeAreaView style={globalStyles.container}>
                <View style={globalStyles.container}>
                    <Text style={{fontSize: 50,fontWeight: 'bold',margin: 20}}  >It appears like the student has no assignments...</Text>
                </View>
            </SafeAreaView>
        )
    }
      
    fetchAssignments = () => {
        this.setState({loading: true})

        // Make a request to Dynamo

        this.setState({refreshing: false, loading: false})
    }

    handleRefresh = () => {
        this.setState({refreshing: true}, () => {
            this.fetchAssignments()
        })
    }
    goToAssignment = (assignment) => {
    // Make a request to Dynamo
    this.props.navigation.navigate('AssignmentDetail', { assignment: assignment })
    }
    render() {
        return(
            <View style={globalStyles.container}>
            {/*For a tutorial on flatlists, see:
            https://medium.com/react-native-development/how-to-use-the-flatlist
            -component-react-native-basics-92c482816fe6*/}
                <FlatList
                    style={styles.list}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListEmptyComponent={this.renderEmptyComponent}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    keyExtractor={item=> item.assignment}
                    data={this.state.grades}
                    renderItem={
                        ({item, index}) => 
                                <Cell 
                                    main={item.assignment} 
                                    detail={item.grade} 
                                    pressed={()=>this.goToAssignment(item.assignment)} />
                    }  />
                </View>
        )
    }
}

export default GradeList

const styles = StyleSheet.create({
    list: {
       width: '100%',
    },
    separator: {
        height: 0.5,
        width: "100%",
        backgroundColor: "#F0F0F1",
    }
})

class Cell extends React.Component {
    render() {
        return(
            <SafeAreaView style={cellStyles.cell}>
                <View style={cellStyles.textContainer}>
                    <Text style={cellStyles.mainText} numberOfLines={1} >{this.props.main}</Text>
                    <View style={cellStyles.detailTextContainer}>
                        <Text style={cellStyles.detailText} numberOfLines={1} >{this.props.detail}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={this.props.pressed}>
                    <View style={cellStyles.detailButton}>
                        <Ionicons name="ios-information-circle-outline" size={25} color="#1D9BF6" />
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const cellStyles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }, 
    detailTextContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
    }, 
    mainText: {
        fontSize: 20,
    },  
    detailText: {
        fontSize: 18,
        color: '#9A9A9A',
        alignSelf: 'flex-end',
    },  
    detailButton: {
        marginRight:10,
        alignItems: 'center',
    }
})