import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import { Aux } from 'src/global/hoc'

import styles from 'src/global/styles'

class CameraScreen extends React.Component {
    render() {
        return(
                <View style={styles.container}>
                    <Text>Camera screen</Text>
                </View>
        )
    }
}

export default CameraScreen;