import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import createRootNavigator from 'src/app/RootNavigation'

import { Auth } from "aws-amplify";
import Amplify from 'aws-amplify-react-native'
import { AWSConfigs } from 'src/keys'


Amplify.configure(AWSConfigs);

import { globalStyles } from 'src/global/styles'

class App extends React.Component {

    state = {
        signedIn: true,
        checkedSignIn: true
      }

    componentDidMount() {
        // isSignedIn()
        //   .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
        //   .catch(err => alert("An error occurred"));
    }

    render() {
        const { checkedSignIn, signedIn } = this.state;

        if (!checkedSignIn) {
        return null // Return loading screen...
        }

        const Layout = createRootNavigator(signedIn)
        return ( 
            <View style={globalStyles.app}>
                <StatusBar barStyle="light-content" />
                <Layout />
            </View>
           
        )
    }
}

export default App