import React from 'react';
import {View, Text, ScrollView, Button, SafeAreaView, SectionList} from 'react-native';
import globalStyles from 'src/global/styles'

class Detail extends React.Component {
    render() {
        return(
            <View style={globalStyles.container}>
                <Text>This is a detail screen</Text>
            </View>
        )
    }
}

export default Detail;