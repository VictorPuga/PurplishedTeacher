import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import styles from 'src/global/styles'

class Conversation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('person', 'Name'),
        };
      };

      componentWillMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setHidden(false);
          });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }
    render() {
        const { navigation } = this.props
        const name = navigation.getParam('person', 'Name')
        
        return(
            <View style={styles.container}>
                <Text>(Chat)</Text>
                <Text>{name}</Text>
            </View>
        )
    }
}

export default Conversation;