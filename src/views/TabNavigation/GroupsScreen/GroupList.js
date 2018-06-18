import React from 'react';
import {View, Text, Button, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {CardCell} from 'src/global/UI'

import globalStyles from 'src/global/styles'

class GroupList extends React.Component {
    state = {
        groups: [
            { id: '0', name: 'Math 1', students: 29},
            { id: '1', name: 'German 3', students: 30},
            { id: '2', name: 'English 3', students: 27},
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

