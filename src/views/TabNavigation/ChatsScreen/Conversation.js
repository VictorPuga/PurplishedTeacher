import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import styles from 'src/global/styles'

class Conversation extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>This is a conversation</Text>
            </View>
        )
    }
}

export default Conversation;