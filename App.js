import React from 'react';
import { View } from 'react-native';
import Onboarding from './src/components/Onboarding'

import styles from './src/global/styles'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <Onboarding />
      </View>
    );
  }
}