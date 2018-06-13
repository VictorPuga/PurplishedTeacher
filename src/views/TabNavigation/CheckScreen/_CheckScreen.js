import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import { Aux } from 'src/global/hoc'

import styles from 'src/global/styles'

// This component may not have navigation

class CameraScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Check screen</Text>
                <Text>(Camera)</Text>
            </View>
        )
    }
}

export default CameraScreen;