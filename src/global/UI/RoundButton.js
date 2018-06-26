import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from 'src/global/styles'

class RoundButton extends React.Component {
    render() {
        return(
            <TouchableOpacity  
                style={[globalStyles.roundButton, this.props.style]} 
                activeOpacity={0.7} 
                onPress={this.props.onPress}>
                <Text style={globalStyles.text} >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default RoundButton

const styles = StyleSheet.create({
    roundButton: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(0,122,255,1)',
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        margin: 5,
        color: 'white'
    }
})