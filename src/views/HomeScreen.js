import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ViewWithTitle from 'src/global/UI/ViewWithTitle/ViewWithTitle'
import { Aux } from 'src/global/hoc'

import styles from 'src/global/styles'

class HomeScreen extends React.Component {
    render() {
        return(
            <ViewWithTitle title="Groups">
                <View>
                    <Text>Group 1</Text>
                    <Text>Group 2</Text>
                    <Text>Group 3</Text>
                </View>
            </ViewWithTitle>
                
        )
    }
}

export default HomeScreen;