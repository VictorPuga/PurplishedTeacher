import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight, StyleSheet, Image, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {TitleCell} from 'src/global/UI'

import globalStyles from 'src/global/styles'

class StudentList extends React.Component {
    state = {
        students: [
            { name: 'John Smith', average: '91', image: 'not found'},
            { name: 'Amy Pond', average: '85', image: 'not found'},
            { name: 'Clara Oswald', average: '90', image: 'not found'},
            { name: 'Sam Flynn', average: '94', image: 'not found'},
            { name: 'Mecho', average: '10/10', image: 'not found'},
            { name: 'Mein Fhurer', average: '40', image: 'not found'},
            { name: 'John Appleseed', average: '89', image: 'not found'},
        ],
        refreshing: false,
        loading: false,
    }
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('group', 'Students'),
        };
      };

      componentWillMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setHidden(false);
          });
    }

    componentWillUnmount() {
        this._navListener.remove();
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

        // Make a request to Dynamo

        this.setState({refreshing: false, loading: false})
    }

    handleRefresh = () => {
          this.setState({refreshing: true}, () => {
              this.fetchStudents()
          })
      }
    goToStudent = (student) => {
        // Make a request to Dynamo
        this.props.navigation.navigate('AssignmentList', { student: student })
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
                    keyExtractor={item=> item.name}
                    data={this.state.students}
                    renderItem={
                        ({item, index}) => 
                                <TitleCell 
                                    title={item.name} 
                                    detail={"Average: "+item.average} 
                                    pressed={() => this.goToStudent(item.name)}/>
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