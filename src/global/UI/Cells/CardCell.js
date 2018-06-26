import React from 'react'
import {View, Text, TouchableHighlight, StyleSheet, Image, SafeAreaView} from 'react-native';
import {ClassIcon} from 'src/global/UI';
import { Ionicons } from '@expo/vector-icons'

class CardCell extends React.Component {
    render() {
        const { title, detail, color, pressed } = this.props
        return(
            <TouchableHighlight 
                underlayColor={'rgba(114,46,209,0.1)'} // This needs to be changed? 
                onPress={pressed}>
                <SafeAreaView style={styles.card}>
                    <ClassIcon 
                        is={0}
                        size={30}
                        color={2}
                         />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText} numberOfLines={1} >{title}</Text>
                        <Text style={styles.detailText} numberOfLines={1} >{detail}</Text>
                    </View>
                    <View style={styles.detailButton}><Ionicons name="ios-arrow-forward" size={20} color="#D1D1D1" /></View>
                </SafeAreaView>
            </TouchableHighlight>
        )
    }
}

export default CardCell

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    }, 
    titleText: {
        width: '100%',
        fontSize: 25,
        fontWeight: 'bold',
    }, 
    detailText: {
        
    },
    image: {
        width: 50, 
        height: 50, 
        borderRadius: 25, // height / 2 = round image
        marginLeft: 10
    },
    detailButton: {
        marginRight:10
    }
})

