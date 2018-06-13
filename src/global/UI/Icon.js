import React from 'react'
import {StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'

let Icons = {
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Foundation,
    MaterialIcons,
    Ionicons,
    MaterialCommunityIcons,
    Octicons,
    SimpleLineIcons,
    Zocial,
}

export default class IconComponent extends React.Component {
    render(){
        let {is, from, ...rest} = this.props
        const icon = Icons[from][is] 
        return(
            <FontAwesome style={styles.icon} {...rest} name={icon} color={color}/>
        )
    }
}
IconComponent.propTypes={
    is: PropTypes.string,
    from: PropTypes.oneOf(  ['IcoMoon',
                            'MaterialDesign',
                            'FontAwesome',
                            'Ionic',
                            'Entypo',
                            'Metrize',
                            'Ikons',
                            'Linea',
                            'Ionics',
                            'Octicons',
                            'Typicons',
                            'NotoEmojiRegular',
                            'Feathericons',])
}
IconComponent.defualtProps={
    is: null,
    from: 'Feathericons'
}

const styles = StyleSheet.create({
        icon: {
            margin: 2,
    }
})