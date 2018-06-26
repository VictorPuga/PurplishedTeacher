import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet, Image, SafeAreaView, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


class TitleCell extends React.Component {
    render() {
        return(
            <TouchableHighlight 
                underlayColor={'rgba(114,46,209,0.1)'}
                onPress={this.props.pressed}>
                <SafeAreaView style={cellStyles.cell}>
                    <Image 
                        style={cellStyles.image} 
                            source={{uri: 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original'}} />
                    <View style={cellStyles.textContainer}>
                        <Text style={cellStyles.titleText} numberOfLines={1} >{this.props.title}</Text>
                        <Text style={cellStyles.detailText} numberOfLines={1} >{this.props.detail}</Text>
                    </View>
                    <View style={cellStyles.detailButton}><Ionicons name="ios-arrow-forward" size={20} color="#D1D1D1" /></View>
                </SafeAreaView>
            </TouchableHighlight>
        )
    }
}

export default TitleCell

const cellStyles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        backgroundColor: 'white',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
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

