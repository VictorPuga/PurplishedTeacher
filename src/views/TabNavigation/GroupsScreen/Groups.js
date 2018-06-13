import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import styles from 'src/global/styles'

class Groups extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Groups screen</Text>
                <Button title="(Select a GROUP from the list) " onPress={()=>this.props.navigation.navigate('Students')} />
            </View>
        )
    }
}

export default Groups