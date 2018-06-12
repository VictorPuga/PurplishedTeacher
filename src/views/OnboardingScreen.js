import React from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { Pages } from 'react-native-pages';
import styles from '../global/styles';

export default class Onboarding extends React.Component {
    state = {
        showText: false
    }
    showLabelHandler = () => {
        this.setState({showText: true})
    }
    render() {
        let label = this.state.showText ? <Text style={styles.text}>Logging in...</Text> : null 
      return (
          <View style={styles.app}>
                <Pages indicatorColor="black" >
                    <View style={styles.container}>
                            <Text style={styles.title}>Welcome to PurplishEd Teacher</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.title}>This is a companion app for the PurplishEd test making web tool</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.title}>Just sign in with your PurplishEd account and start checking those tests!</Text>
                    </View>
                    <KeyboardAvoidingView style={styles.container}behavior="padding">
                        {label}
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
                        <Button title="Continue" onPress={this.showLabelHandler} />
                    </KeyboardAvoidingView>
                </Pages>
          </View>
      );
    }
  }
