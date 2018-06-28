import React from 'react';
import {View, Text , FlatList, StyleSheet, SafeAreaView } from 'react-native';
import {CardCell} from 'src/global/UI'

import { globalStyles } from 'src/global/styles'

class GroupList extends React.Component {
    state = {
        groups: [
            { id: '0', name: 'English 2',   students: 29, color: 0, icon: 0 },
            { id: '1', name: 'Math 2',      students: 29, color: 1, icon: 1 },
            { id: '2', name: 'Science 3',   students: 29, color: 2, icon: 2 },
            { id: '3', name: 'Arts 1',      students: 29, color: 3, icon: 3 },
            { id: '4', name: 'Geography 1', students: 29, color: 4, icon: 4 },
            { id: '5', name: 'Science 1',   students: 29, color: 5, icon: 5 },
            { id: '6', name: 'Chemistry 2', students: 29, color: 6, icon: 6 },
            { id: '7', name: 'Technology 1',  students: 29, color: 7, icon: 7 },
            { id: '8', name: 'German 3',    students: 29, color: 0, icon: 8 },
            { id: '9', name: 'LOL',         students: 29, color: 1, icon: 9 },
        ],
        refreshing: false,
        loading: false,
    }
    static navigationOptions = {
        title: 'Groups'
    }

    renderSeparator = () => <View />
    renderEmptyComponent = () => {
        return(
            <SafeAreaView style={globalStyles.container}>
                    <Text style={{fontSize: 50,fontWeight: 'bold',margin: 20}}  >It appears like you have no groups...</Text>
            </SafeAreaView>
        )
    }
      
    fetchGroups = () => {
        this.setState({loading: true})

        // Make a request to Dynamo

        this.setState({refreshing: false, loading: false})
    }

    handleRefresh = () => {
        this.setState({refreshing: true}, () => {
            this.fetchGroups()
        })
    }

    goToGroup = (group) => {
        // Make a request to Dynamo
        this.props.navigation.navigate('StudentList', { group: group })
    }
    
    render() {
        return(
            <View style={globalStyles.container}>
            
            {/*For a tutorial on flatlists, see:
            https://medium.com/react-native-development/how-to-use-the-flatlist
            -component-react-native-basics-92c482816fe6*/}

                <FlatList
                    contentContainerStyle={{alignItems: 'center', paddingBottom: 20}}
                    style={styles.list}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListEmptyComponent={this.renderEmptyComponent}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    keyExtractor={item=> item.id}
                    data={this.state.groups}
                    renderItem={
                        ({item, index}) => 
                            <CardCell 
                                title={item.name} 
                                detail={item.students +" students"}
                                color={item.color}   
                                icon={item.icon}
                                pressed={() => this.goToGroup(item.name)}/>
                    }  />
            </View>
        )
    }
}

export default GroupList

const styles = StyleSheet.create({
    list: {
        width: '100%',
     },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        margin: 5,
    },
    content: {
        fontSize: 20,
        margin: 5,
    },
    whiteBack: {
        backgroundColor: 'white'
    }
})

