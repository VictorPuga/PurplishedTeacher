import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight, StyleSheet, Image, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Aux} from 'src/global/hoc'

import globalStyles from 'src/global/styles'

class StudentList extends React.Component {
    state = {
        students: [
            { id: '0', name: 'person', average: '91', image: 'not found'},
            { id: '1', name: 'someone', average: '85', image: 'not found'},
        ],
        refreshing: false,
        loading: false,
    }

    renderSeparator = () => <View style={styles.separator}/>
    renderEmptyComponent = () => {
        return(
            <SafeAreaView style={globalStyles.container}>
                <View style={globalStyles.container}>
                    <Text style={{fontSize: 50,fontWeight: 'bold',margin: 20}}  >It appears like you have no students...</Text>
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
          this.props.navigation.navigate('GradeList', { student: student })
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
                    data={this.state.students}
                    renderItem={
                        ({item, index}) => 
                            <TouchableHighlight
                                underlayColor={'rgba(114,46,209,0.1)'}
                                onPress={() => this.goToStudent(item.name)}
                               >
                                <Cell title={item.name} detail={"Average: "+item.average} />
                            </TouchableHighlight>
                    }  />
                </View>
        )
    }
}

export default StudentList

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
                <Image 
                    style={cellStyles.image} 
                        source={{uri: 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original'}} />
                <View style={cellStyles.textContainer}>
                    <Text style={cellStyles.titleText} numberOfLines={1} >{this.props.title}</Text>
                    <Text style={cellStyles.detailText} numberOfLines={1} >{this.props.detail}</Text>
                </View>
                <View style={cellStyles.detailButton}><Ionicons name="ios-arrow-forward" size={20} color="gray" /></View>
            </SafeAreaView>
        )
    }
}

const cellStyles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    }, 
    titleText: {
        width: '100%',
        fontSize: 25,
        fontWeight: 'bold',
    }, 
    detailText: {
        
    },
    image: {
        width: 50, 
        height: 50, 
        borderRadius: 25, // height / 2 = round image
        marginLeft: 10
    },
    detailButton: {
        marginRight:10
    }
    
})