import React from 'react';
import {View, Text, Button, FlatList, TouchableHighlight, StyleSheet, Image, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                <View style={globalStyles.container}>
                    <Text style={{fontSize: 50,fontWeight: 'bold',margin: 20}}  >It appears like you have no groups...</Text>
                </View>
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
                            <TouchableHighlight
                                underlayColor={'rgba(114,46,209,0.1)'}
                                onPress={() => this.goToGroup(item.name)}
                               >
                                <Card title={item.name} detail={item.students +" students"} />
                            </TouchableHighlight>
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

class Card extends React.Component {
    render() {
        return(
            <SafeAreaView style={cardStyles.card}>
                <Image 
                    style={cardStyles.image} 
                        source={{uri: 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original'}} />
                <View style={cardStyles.textContainer}>
                    <Text style={cardStyles.titleText} numberOfLines={1} >{this.props.title}</Text>
                    <Text style={cardStyles.detailText} numberOfLines={1} >{this.props.detail}</Text>
                </View>
                <View style={cardStyles.detailButton}><Ionicons name="ios-arrow-forward" size={20} color="gray" /></View>
            </SafeAreaView>
        )
    }
}

const cardStyles = StyleSheet.create({
    card: {
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