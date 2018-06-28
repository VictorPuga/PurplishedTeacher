import React from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { styles } from '../global/styles';

export default class AuthScreen extends React.Component {
    render() {
      return (
          <View style={styles.app}>
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
                        <Button title=" Continue " onPress={()=>this.props.navigation.navigate('Tabs')} />
                    </KeyboardAvoidingView>
          </View>
      );
    }
  }
