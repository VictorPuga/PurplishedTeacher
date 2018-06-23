import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Alert, Modal, Button, ScrollView } from 'react-native';
import {FakeNav} from 'src/global/UI'


class AnswerModal
 extends React.Component {
    render() {
        return(
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.isVisible}
                presentationStyle="formSheet"
                onRequestClose={() => Alert.alert('Modal has been closed.')}>
                    <SafeAreaView style={{backgroundColor: '#722ed1'}}>
                        <FakeNav title="Checking test..." /> 
                    </SafeAreaView>
                    <ScrollView style={styles.scroll} >
                        <Text>{this.props.qr}</Text>
                        <Text>Name: </Text>
                        <Text> </Text>
                        <Text>1 A</Text>
                        <Text>2 A</Text>
                        <Text>3 A</Text>
                        <Text>4 A</Text>
                        <Text>5 A</Text>
                        <Text>6 A</Text>
                        <Text>7 A</Text>
                        <Text>8 A</Text>
                        <Text>9 A</Text>
                        <Text>10 A</Text>
                        <Text>11 A</Text>
                        <Text>12 A</Text>
                        <Text> </Text>
                        <Text>98.2</Text>
                        <Button title="Finish" onPress={this.props.close} color="#722ed1" />
                    </ScrollView>
            </Modal>
        )
    }
}

export default AnswerModal

const styles = StyleSheet.create
({
    scroll: {
        padding: 20,
    }
})