import React from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { globalStyles } from 'src/global/styles';

export default class SignUpScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Change password'
        };
    };

    render() {
      return (
          <View style={globalStyles.app}>
                    <KeyboardAvoidingView style={globalStyles.container} behavior="padding">
                        <Text style={globalStyles.subtitle}>
                            Forgot your password?
                        </Text>
                        <Button title=" Continue " onPress={()=>console.log('hey')} />
                    </KeyboardAvoidingView>
          </View>
      );
    }
  }
