import React from 'react';
import { View, Text, Button, FlatList , StyleSheet, Image, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {TitleCell} from 'src/global/UI'

import globalStyles from 'src/global/styles'

class List extends React.Component {
    state = {
        chats: [
            { id: '0', with: 'person', lastText: 'hey',image: 'not found'},
            { id: '1', with: 'yourself', lastText: 'hello',image: 'not found'},
            { id: '2', with: 'nobody', lastText: '* silence *',image: 'not found'},
            { id: '3', with: 'alien', lastText: 'VEvafruE3',image: 'not found'},
            { id: '4', with: 'test', lastText: 'dsfxghcbd ukckusyc bysdck skcsdyc scubscbskngynskucgukct',image: 'not found'},
            { id: '5', with: 'alien', lastText: 'VEvafruE3',image: 'not found'},
            { id: '6', with: 'error', lastText: 'error',image: 'error'},
            { id: '7', with: 'error', lastText: 'error',image: 'error'},
            { id: '8', with: 'error', lastText: 'error',image: 'error'},
            { id: '9', with: 'error', lastText: 'error',image: 'error'},
            { id: '10', with: 'error', lastText: 'error',image: 'error'},
            { id: '11', with: 'error', lastText: 'error',image: 'error'},
            { id: '12', with: 'error', lastText: 'error',image: 'error'},
            { id: '13', with: 'error', lastText: 'error',image: 'error'},
            { id: '14', with: 'error', lastText: 'error',image: 'error'},
            { id: '15', with: 'error', lastText: 'error',image: 'error'},
            { id: '16', with: 'error', lastText: 'error',image: 'error'},
        ],
        refreshing: false,
        loading: false,
    }
    static navigationOptions = {
        title: 'Chats'
    }

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
                    <Text style={{fontSize: 50,fontWeight: 'bold',margin: 20}}  >It appears like you have no chats...</Text>
                    <Button 
                        style={styles.titleText} 
                        title="Start a new one!"
                        /*onPress={}*/ />
                </View>
            </SafeAreaView>
        )
    }
      
      fetchChats = () => {
          this.setState({loading: true})

          // Load all the data for the chat list from the server
          // Don't request all the chats, just some. Like 20
          // Also fetch the last message of each chat

          this.setState({refreshing: false, loading: false})
      }

      handleRefresh = () => {
          this.setState({refreshing: true}, () => {
              this.fetchChats()
          })
      }
      goToChat = (person) => {
          // Fetch all the conversation's messages
          this.props.navigation.navigate('Conversation', { person: person })
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
                    data={this.state.chats}
                    renderItem={
                        ({item, index}) => 
                            <TitleCell 
                                title={item.with} 
                                detail={item.lastText} 
                                pressed= {() => this.goToChat(item.with)}/>
                    }  />
            </View>
        )
    }
}

export default List;

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

