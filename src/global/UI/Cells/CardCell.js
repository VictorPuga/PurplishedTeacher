import React from 'react'
import {View, Text, TouchableHighlight, StyleSheet, Image, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class CardCell extends React.Component {
    render() {
        return(
            <TouchableHighlight 
                underlayColor={'rgba(114,46,209,0.1)'}
                onPress={this.props.pressed}>
                <SafeAreaView style={styles.card}>
                    <Image 
                        style={styles.image} 
                            source={{uri: 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original'}} />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText} numberOfLines={1} >{this.props.title}</Text>
                        <Text style={styles.detailText} numberOfLines={1} >{this.props.detail}</Text>
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

