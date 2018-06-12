import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ViewWithTitle from 'scr/global/UI/ViewWithTitle/ViewWithTitle'

import styles from 'src/global/styles'

class HomeScreen extends React.Component {
    render() {
        return(
                <ViewWithTitle title="hey">
                    <View style={{backgroundColor: 'red', flex: 1}}>
                    <Text>hey</Text>
                    <Text>hey</Text>
                    <Text>hey</Text>
                    </View>
                    
                </ViewWithTitle>
        )
    }
}

export default HomeScreen;