import React from 'react';
import { View, StatusBar, TextInput, StyleSheet, Button } from 'react-native';
import RootNavigation from 'src/app/RootNavigation'

import Amplify, { Auth } from "aws-amplify";


Amplify.configure({
      Auth: {
          mandatorySignIn: true,
          region: 'us-west-2',
          userPoolId: 'us-west-2_5qIWGEJyT',
          identityPoolId: 'us-west-2:2d6d79ed-4283-43f1-976f-75c37f1b4c32',
          userPoolWebClientId: '5dg8qvc42rn3l9gbd9ulqbmvr3'
      },
      Storage: {
          region: 'us-west-2',
          bucket: 'purplished-card-resources',
          identityPoolId: 'us-west-2:2d6d79ed-4283-43f1-976f-75c37f1b4c32'
      },
      API: {
          endpoints: [
              {
                  name: 'assigments',
                  endpoint: 'https://hms6g460mb.execute-api.us-west-2.amazonaws.com/prod',
                  region: 'us-west-2'
              },
              {
                  name: 'banks',
                  endpoint: 'https://o45nxtbhj6.execute-api.us-west-2.amazonaws.com/prod',
                  region: 'us-west-2'
              },
              {
                  name: 'groups',
                  endpoint: 'https://41ohpsonm1.execute-api.us-west-2.amazonaws.com/prod',
                  region: 'us-west-2'
              },
              {
                  name: 'schools',
                  endpoint: 'https://dcoovhnoq1.execute-api.us-west-2.amazonaws.com/prod',
                  region: 'us-west-2'
              },
              {
                  name: 'students',
                  endpoint: 'https://2i6herity0.execute-api.us-west-2.amazonaws.com/prod',
                  region: 'us-west-2'
              },
              {
                  name: 'subjects',
                  endpoint: 'https://2nrj40oee9.execute-api.us-west-2.amazonaws.com/prod',
                  region: 'us-west-2'
              },
              {
                  name: 'tests',
                  endpoint: 'https://8g2ept035h.execute-api.us-west-2.amazonaws.com/prod',
                  region: 'us-west-2'
              },    
          ]
      }
    });

import { globalStyles } from 'src/global/styles'

class App extends React.Component {

  // state = {
  //   authCode: ''
  // }

  // onChangeText = (value) => {
  //   this.setState({authCode: value})
  // }

  // signIn = (user, password) => {
  //   Auth.signIn(user, password)
  //   .then(user => {

  //   })
  //   .catch(e => {
  //     console.log('error signing up: ', e)
  //   })
  // }

  // signUp = () => {
  //   Auth.signUp({
  //     username: 'victorpuga',
  //     password: 'HelloWorld!',
  //     atributes: {
  //       email: 'victorpugaruiz@live.com.mx',
  //       phone:'+5216144875453',
  //     }
  //   })
  //   .then( res => {
  //     console.log('signed in', res)
  //   })
  //   .catch( e => {
  //     console.log('error signing in: ', e)
  //   })
  // }

  // verify = () => {
  //   const {authCode} = this.state
  //   Auth.confirmSignUp('Vic', authCode)
  //   .then( res => {
  //     console.log('confirmed', res)
  //   })
  //   .catch( e => {
  //     console.log('error confirming: ', e)
  //   })
  // }

render() {
    return (
         <View style={globalStyles.app}>
            <StatusBar barStyle="light-content" />
            <RootNavigation />
            {/* <Button title="Sign up" onPress={this.signUp} />
            <TextInput 
              style={styles.input}
              onChangeText={value => this.onChangeText(value)}
            />
            <Button title="Sign in" onPress={this.signIn} /> */}
          </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: 'red'
  }
})