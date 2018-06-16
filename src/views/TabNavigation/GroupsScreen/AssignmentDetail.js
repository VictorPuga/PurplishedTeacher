import React from 'react';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';

import globalStyles from 'src/global/styles'

class AssignmentDetail extends React.Component {

    state = {
        assignment: {
            grade: 92,
            details: 'This was an assignment that has been already checked.'
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('assignment', 'Assignment'),
        };
      };
    render() {
        return(
            <View style={globalStyles.container}>
                <View style={styles.square} aspectRatio={1} ><Text>fdaut</Text></View>
                <Text>Grade detail screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        backgroundColor: 'blue'
    }
})

export default AssignmentDetail;