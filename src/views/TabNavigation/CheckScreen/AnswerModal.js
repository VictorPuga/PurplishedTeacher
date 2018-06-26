import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Alert, Modal, Button, ScrollView } from 'react-native';
import {FakeNav, RoundButton} from 'src/global/UI'
import { globalStyles } from 'src/global/styles'



class AnswerModal
 extends React.Component {
    render() {
        const {qr, answers} = this.props

        const answerLabels = answers ? answers.map( (answer, index) => <Text 
                                                                style={{backgroundColor: 'red', color: 'black'}} 
                                                                key={index} >
                                                                    {answer}
                                                                </Text>) 
                                        : null

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
                        <Text>{qr}</Text>
                        <Text>Name: </Text>
                        <Text> </Text>
                        {answerLabels}
                        <Text> </Text>
                        <Text>Grade: </Text>
                        <RoundButton title="Finish!" style={styles.button} onPress={this.props.close}  />
                    </ScrollView>
            </Modal>
        )
    }
}

export default AnswerModal

const styles = StyleSheet.create({
    scroll: {
        paddingHorizontal: 20,
        marginBottom: 25,
    },
    button:{
        marginTop: 10,
        backgroundColor: '#722ED1'
    }
})