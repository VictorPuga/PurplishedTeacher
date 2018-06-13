import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import { Aux } from 'src/global/hoc'

import styles from 'src/global/styles'

class HomeScreen extends React.Component {
    render() {
        return(
                <View style={styles.container}>
                    <Text>Home screen</Text>
                </View>
        )
    }
}

export default HomeScreen;