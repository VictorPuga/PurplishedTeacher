import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import { Aux } from 'src/global/hoc'

import styles from 'src/global/styles'

class AccountScreen extends React.Component {
    render() {
        return(
                <View style={styles.container}>
                    <Text>Account Screen</Text>
                </View>
        )
    }
}

export default AccountScreen;