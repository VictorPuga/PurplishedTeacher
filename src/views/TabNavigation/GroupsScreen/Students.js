import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import styles from 'src/global/styles'

class Students extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Students screen</Text>
                <Button title="(Select a STUDENT from the list) " onPress={()=>this.props.navigation.navigate('Grades')} />
            </View>
        )
    }
}

export default Students;