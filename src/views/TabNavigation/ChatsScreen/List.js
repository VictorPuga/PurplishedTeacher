import React from 'react';
import { View, Text, Button, FlatList, TouchableHighlight, StyleSheet, Image, SafeAreaView, ActivityIndicator} from 'react-native';

import {Aux} from 'src/global/hoc'

import globalStyles from 'src/global/styles'

class List extends React.Component {
    state = {
        chats: [
            {with: 'person', lastText: 'hey',image: 'not found'},
            {with: 'yourself', lastText: 'hello',image: 'not found'},
            {with: 'nobody', lastText: '* silence *',image: 'not found'},
            {with: 'alien', lastText: 'VEvafruE3',image: 'not found'},
            {with: 'test', lastText: 'dsfxghcbd ukckusyc bysdck skcsdyc scubscbskngynskucgukct',image: 'not found'},
            {with: 'alien', lastText: 'VEvafruE3',image: 'not found'},
            {with: 'error', lastText: 'error',image: 'error'},
        ],
        loading: true
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
    renderHeader = () => {
        if (!this.state.loading) return null;
    
        return (
            <Aux>
                <ActivityIndicator animating size="large" style={{margin: 30}} />
                <View style={styles.separator}/>
            </Aux>
        );
      };
      
    render() {
        return(
            <View style={globalStyles.container}>
                <FlatList
                    style={styles.list}
                    // inverted={true}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListEmptyComponent={this.renderEmptyComponent}
                    ListHeaderComponent={this.renderHeader}
                    data={this.state.chats}
                    renderItem={
                        ({item, separators}) => 
                            <TouchableHighlight
                               // onPress={() => this._onPress(item)}
                               
                                onShowUnderlay={separators.highlight}
                                onHideUnderlay={separators.unhighlight}>
                                <Cell title={item.with} detail={item.lastText}/>
                            </TouchableHighlight>
                    }  />
                <Button title="(Select a CHAT from the list) " onPress={()=>this.props.navigation.navigate('Conversation')} />
            </View>
        )
    }
}

export default List;

const styles = StyleSheet.create({
    list: {
       width: '100%',
    },
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
    },
    titleText: {
        width: '100%',
        fontSize: 25,
        fontWeight: 'bold',
    }, 
    image: {
        width: 50, 
        height: 50, 
        borderRadius: 25, // height / 2 = round image
        marginLeft: 10
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
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
            <SafeAreaView style={styles.cell}>
                <Image 
                    style={styles.image} 
                        source={{uri: 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original'}} />
                <View style={styles.textContainer}>
                    <Text style={styles.titleText} numberOfLines={1} >{this.props.title}</Text>
                    <Text style={styles.detailText} numberOfLines={1} >{this.props.detail}</Text>
                </View>
            </SafeAreaView>
        )
    }
}