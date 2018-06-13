import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import styles from 'src/global/styles'

class Main extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>This is your main screen</Text>
                <Button title="(Select an ITEM from the list) " onPress={()=>this.props.navigation.navigate('Detail')} />
            </View>
        )
    }
}

export default Main;