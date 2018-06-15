import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import styles from 'src/global/styles'

class GradeDetail extends React.Component {
    render() {
        const { navigation } = this.props
        const name = navigation.getParam('person', 'Name')
        
        return(
            <View style={styles.container}>
                <Text>Grade detail screen</Text>
            </View>
        )
    }
}

export default GradeDetail;