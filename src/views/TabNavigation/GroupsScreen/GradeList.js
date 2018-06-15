import React from 'react'
import { View, Text, Button, FlatList, TouchableHighlight, StyleSheet, Image, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Aux} from 'src/global/hoc'

import globalStyles from 'src/global/styles'

class GradeList extends React.Component {
    state = {
        grades: [
            { id: '0', assignment: 'activity 1', grade: '90' },
            { id: '1', assignment: 'activity 2', grade: '92' },
        ],
        refreshing: false,
        loading: false,
    }

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
      
      fetchStudents = () => {
          this.setState({loading: true})

          // Load all the data for the chat list from the server
          // Don't request all the chats, just some. Like 20
          // Also fetch the last message of each chat

          this.setState({refreshing: false, loading: false})
      }

      handleRefresh = () => {
          this.setState({refreshing: true}, () => {
              this.fetchStudents()
          })
      }
      goToStudent = (student) => {
          // Fetch all the conversation's messages
          this.props.navigation.navigate('Grades', { student: student })
      }
    render() {
        return(
            <View style={globalStyles.container}>
            {/*For a tutorial on flatlists, see:
            https://medium.com/react-native-development/how-to-use-the-flatlist
            -component-react-native-basics-92c482816fe6*/}
                <FlatList
                    style={styles.list}
                    // inverted={true}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListEmptyComponent={this.renderEmptyComponent}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    keyExtractor={item=> item.id}
                    data={this.state.grades}
                    renderItem={
                        ({item, index}) => 
                            <TouchableHighlight
                                underlayColor={'rgba(114,46,209,0.1)'}
                                onPress={() => this.goToStudent(item.name)}
                               >
                                <Cell main={item.assignment} detail={item.grade} />
                            </TouchableHighlight>
                    }  />
                    <Cell main="test" detail="grade" />
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
})