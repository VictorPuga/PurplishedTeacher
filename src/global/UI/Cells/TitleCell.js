import React from 'react'
import {View} from 'react-native'

class Cell extends React.Component {
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
                    <View style={cellStyles.detailButton}><Ionicons name="ios-arrow-forward" size={20} color="gray" /></View>
                </SafeAreaView>
            </TouchableHighlight>
        )
    }
}

const cellStyles = StyleSheet.create({
    cell: {
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

export default Cell