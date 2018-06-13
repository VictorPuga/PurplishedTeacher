import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import styles from 'src/global/styles'

class Detail extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>This is your detail screen</Text>
            </View>
        )
    }
}

export default Detail;