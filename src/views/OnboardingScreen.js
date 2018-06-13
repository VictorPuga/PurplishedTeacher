import React from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { Pages } from 'react-native-pages';
import styles from '../global/styles';

export default class Onboarding extends React.Component {
    continueHandler = () => {
        this.props.navigation.navigate('Home')
    }
    render() {
      return (
          <View style={styles.app}>
                <Pages indicatorColor="black" >
                    <View style={styles.container}>
                            <Text style={styles.title}>Welcome to Purplished Teacher</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.title}>This is a companion app for the Purplished test making web tool</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.title}>Just sign in with your Purplished account and start checking those tests!</Text>
                    </View>
                    <KeyboardAvoidingView style={styles.container} behavior="padding">
                        <TextInput 
                            style={styles.input} 
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            placeholder="Email Address" 
                            enablesReturnKeyAutomatically
                            returnKeyType={ "next" }
                            selectionColor="purple" />
                        <TextInput 
                            style={styles.input} 
                            ref={(input) => { this.secondTextInput = input; }}
                            placeholder="Password"  
                            enablesReturnKeyAutomatically
                            returnKeyType={ "done" }
                            selectionColor="purple"
                            secureTextEntry/>
                        <Button title="Continue" onPress={this.continueHandler} />
                    </KeyboardAvoidingView>
                </Pages>
          </View>
      );
    }
  }
