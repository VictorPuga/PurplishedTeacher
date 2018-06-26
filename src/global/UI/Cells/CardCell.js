import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import {ClassIcon} from 'src/global/UI';

import {colors} from 'src/global/styles'

class CardCell extends React.Component {
    render() {
        const { title, detail, color, pressed, icon } = this.props

        let THEColor

        switch (color) {
            case 0:
                THEColor = colors.red
                break;
            case 1:
                THEColor = colors.orange
                break;
            case 2:
                THEColor = colors.yellow
                break;
            case 3:
                THEColor = colors.green
                break;
            case 4:
                THEColor = colors.tealBlue
                break;
            case 5:
                THEColor = colors.blue
                break;
            case 6:
                THEColor = colors.purple
                break;
            case 7:
                THEColor = colors.pink
                break;
            default:
                THEColor = colors.red
                break;
        }

        return(
            <TouchableOpacity 
                activeOpacity={0.85}
                onPress={pressed}
                style={[styles.card, {backgroundColor: THEColor}]}>
                <SafeAreaView>
                    <View style={styles.iconContainer}>
                        <ClassIcon
                            is={icon}
                            style={styles.icon}
                            size={200} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText} numberOfLines={1} >{title}</Text>
                        <Text style={styles.detailText} numberOfLines={1} >{detail}</Text>
                    </View>
                </SafeAreaView>
            </TouchableOpacity>
        )
    }
}

export default CardCell

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 300,
        marginTop: 40,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {height: 5, width: 5},
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
    textContainer: {
        flex: 1,
        padding: 0,
        width: 270,
        top: 190,
        left: 15,
    }, 
    titleText: {
        width: '100%',
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    }, 
    detailText: {
        color: 'white',
        fontSize: 30,
    },
    iconContainer: {
        left: 15,
        top: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

