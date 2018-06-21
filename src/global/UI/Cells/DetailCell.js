import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';


class DetailCell extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.cell}>
                <View style={styles.textContainer}>
                    <Text style={styles.mainText} numberOfLines={1} >{this.props.main}</Text>
                    <View style={styles.detailTextContainer}>
                        <Text style={styles.detailText} numberOfLines={1} >{this.props.detail}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default DetailCell

const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'white',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }, 
    detailTextContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
    }, 
    mainText: {
        fontSize: 20,
    },  
    detailText: {
        fontSize: 18,
        color: '#9A9A9A',
        alignSelf: 'flex-end',
    },  
    detailButton: {
        marginRight:10,
        alignItems: 'center',
    }
})

