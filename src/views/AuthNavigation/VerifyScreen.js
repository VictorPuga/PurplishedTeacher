import React from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { globalStyles } from 'src/global/styles';

export default class VerifyScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Verify'
        };
    };

    render() {
      return (
          <View style={globalStyles.app}>
                    <KeyboardAvoidingView style={globalStyles.container} behavior="padding">
                        <Text style={globalStyles.subtitle}>
                            Verify your email address
                        </Text>
                        <Button title="Continue" onPress={()=>console.log('hey')} />
                    </KeyboardAvoidingView>
          </View>
      );
    }
  }
