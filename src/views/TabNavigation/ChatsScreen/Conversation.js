import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from 'src/global/styles'

class Conversation extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('person', 'Name'),
        };
      };
    render() {
        const { navigation } = this.props
        const name = navigation.getParam('person', 'Name')
        
        return(
            <View style={globalStyles.container}>
                <Text>(Chat)</Text>
                <Text>{name}</Text>
            </View>
        )
    }
}

export default Conversation;