import React from 'react';
import {View, Text, Button, FlatList, TouchableHighlight, StyleSheet} from 'react-native';
import {Icon} from 'src/global/UI'

import globalStyles from 'src/global/styles'

class List extends React.Component {
    state = {
        chats: [
            {with: 'person', lastText: 'hey',image: 'not found'},
            {with: 'yourself', lastText: 'hello',image: 'not found'},
            {with: 'nobody', lastText: '* silence *',image: 'not found'},
            {with: 'alien', lastText: 'VEvafrgbtYU6trhergrfwacvBE3',image: 'not found'},
            {with: 'error', lastText: 'error',image: 'error'},
        ]
    }
    render() {
        return(
            <View style={globalStyles.container}>
                <FlatList 
                    // inverted={true}

                    style={styles.chatList}
                    data={this.state.chats}
                    renderItem={
                        ({item, separators}) => 
                            <TouchableHighlight
                                onPress={() => this._onPress(item)}
                                onShowUnderlay={separators.highlight}
                                onHideUnderlay={separators.unhighlight}>
                                <View style={{backgroundColor: 'white'}}>
                                    <Text>{item.image}</Text>
                                    <Text>{item.with}</Text>
                                    <Text>{item.lastText}</Text>
                                </View>
                            </TouchableHighlight>
                    }  />
                
                <Cell/>
                
                <Button title="(Select a CHAT from the list) " onPress={()=>this.props.navigation.navigate('Conversation')} />
            </View>
        )
    }
}

export default List;

const styles = StyleSheet.create({
    chatList: {
        backgroundColor: 'blue',
        width: '100%'
    }
})

class Cell extends React.Component {
    render() {
        return(
            <View>
                <Text>hey</Text>
            </View>
        )
    }
}