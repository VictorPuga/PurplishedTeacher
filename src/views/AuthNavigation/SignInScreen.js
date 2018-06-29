import React from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { globalStyles } from 'src/global/styles';

export default class SignInScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Sign in'
        };
    };

    render() {
      return (
          <View style={globalStyles.app}>
                    <KeyboardAvoidingView style={globalStyles.container} behavior="padding">
                        <Text style={globalStyles.subtitle}>
                            Welcome to Purplished
                        </Text>
                        <TextInput 
                            style={globalStyles.input} 
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            placeholder="User name / Email" 
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
                        <Button title="Continue" onPress={()=>console.log('hey')} />
                        <View style={styles.row} >
                            <Button 
                                title="Don't have an account?" 
                                onPress={() => this.props.navigation.navigate('signUp')} />
                            <Button 
                                title="Forgot your paswword?" 
                                onPress={() => this.props.navigation.navigate('forgotPassword')} />
                        </View>
                        
                    </KeyboardAvoidingView>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
      row: {
          marginTop: 40
      }
  })