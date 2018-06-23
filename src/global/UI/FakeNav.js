import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


class FakeNav extends Component {
    render() {
        title = this.props.title
        // button = this.props.button ? <Button title="Button" onPress={this.props.pressed} style={styles.button} /> : null
        return (
            <View style={styles.outerContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
            </View>
        )
    }
}

export default FakeNav;

const styles= StyleSheet.create({
    outerContainer: {
        width: '100%',
        backgroundColor: '#722ed1',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomColor: '#A96AD1',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute'
    }
})

