import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import styles from 'src/global/styles'

class List extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>This is a list of chats</Text>
                <Button title="(Select a CHAT from the list) " onPress={()=>this.props.navigation.navigate('Conversation')} />
            </View>
        )
    }
}

export default List;