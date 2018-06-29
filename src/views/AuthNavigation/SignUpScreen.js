import React from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { globalStyles } from 'src/global/styles';

export default class SignUpScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Sign up'
        };
    };

    render() {
      return (
          <View style={globalStyles.app}>
                    <KeyboardAvoidingView style={globalStyles.container} behavior="padding">
                        <Text style={globalStyles.subtitle}>
                            Sign up
                        </Text>
                        <Button 
                            title="Continue" 
                            onPress={() => this.props.navigation.navigate('verify')} />
                    </KeyboardAvoidingView>
          </View>
      );
    }
  }
