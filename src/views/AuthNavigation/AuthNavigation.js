import React from 'react';
import { createStackNavigator } from 'react-navigation'
import * as Views from './_index'

import Amplify, { Authenticator } from 'aws-amplify-react-native';

const { SignInScreen, SignUpScreen, ForgotPasswordScreen, VerifyScreen } = Views

const AuthNavigation  = createStackNavigator({
  signIn: { screen: SignInScreen},
  signUp: { screen: SignUpScreen},
  forgotPassword: { screen: ForgotPasswordScreen},
  verify: { screen: VerifyScreen},
},
{
  initialRouteName: 'signIn',
  navigationOptions: ({ navigation }) => ({
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: 'whitesmoke',
}),
})

export default AuthNavigation

const styles = {
  header: {
      backgroundColor: '#722ED1',
  },
  headerTitle: {
      color: 'white'
  }
}