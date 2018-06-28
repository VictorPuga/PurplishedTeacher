import React from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { globalStyles } from 'src/global/styles';

export default class AuthBetaScreen extends React.Component {
    render() {
      return (
          <View style={globalStyles.app}>
                    <KeyboardAvoidingView style={globalStyles.container} behavior="padding">
                        <TextInput 
                            style={globalStyles.input} 
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            placeholder="Email Address" 
                            enablesReturnKeyAutomatically
                            returnKeyType={ "next" }
                            selectionColor="purple" />
                        <TextInput 
                            style={globalStyles.input} 
                            ref={(input) => { this.secondTextInput = input; }}
                            placeholder="Password"  
                            enablesReturnKeyAutomatically
                            returnKeyType={ "done" }
                            selectionColor="purple"
                            secureTextEntry/>
                        <Button title=" Continue " onPress={()=>console.log('hey')} />
                    </KeyboardAvoidingView>
          </View>
      );
    }
  }
