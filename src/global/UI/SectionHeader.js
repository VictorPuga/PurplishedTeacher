import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView,} from 'react-native';

import { globalStyles } from 'src/global/styles'

class SectionHeader extends React.Component {
    render() {
        return(
            <View style={styles.header}>
                <Text style={styles.text} >{this.props.text}</Text>
            </View>
        )
        
    }
}

export default SectionHeader


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 35,
        paddingLeft: 10,
        paddingBottom: 5,
        backgroundColor: '#EFEFF4',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },  
    text:{
        color: '#88888D',
        fontSize: 12,
    }
})

