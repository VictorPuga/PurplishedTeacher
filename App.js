import React from 'react';
import { View } from 'react-native';
import RootNavigation from 'src/app/RootNavigation'

import styles from 'src/global/styles'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <RootNavigation />
          
      </View>
    );
  }
}