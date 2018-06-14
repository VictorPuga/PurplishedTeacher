import React from 'react';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import globalStyles from 'src/global/styles'

class Groups extends React.Component {
    state = {
        groups: ['German 1', 'English 3', 'German 3']
    }
    render() {
        const {groups} = this.state

        return(
            <ScrollView style={styles.whiteBack}>
                <View style={globalStyles.container}>
                    <Text style={styles.title} >Groups screen :) </Text>
                    <Text style={styles.content} >{groups[0]}</Text>
                    <Text style={styles.content} >{groups[1]}</Text>
                    <Text style={styles.content} >{groups[2]}</Text>
                    
                    <Button title="(Select a GROUP from the list) " onPress={()=>this.props.navigation.navigate('Students')} />
                </View>
            </ScrollView>
        )
    }
}

export default Groups

const styles = StyleSheet.create({
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