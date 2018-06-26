import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { colors } from 'src/global/styles'


class ClassIcon extends React.Component {
    render() {
        const { is, size, color, ...rest } = this.props

        let icon
        let THEColor

        switch (is) {
            case 0:
                return icon = 'md-create'
            case 1:
                return icon = 'md-calculator'
            case 2:
                return icon = 'ios-flask'
            case 3:
                return icon = 'md-color-palette'
            case 4:
                return icon = 'md-globe'
            case 5:
                return icon = 'ios-leaf'
            case 6:
                return icon = 'ios-thermometer'
            case 7:
                return icon = 'ios-bulb'
            case 8:
                return icon = 'md-create'
            case 9:
                return icon = 'md-create'
            default:
                return icon = 'md-create'
        }

        switch (color) {
            case 0:
                return THEColor = colors.red
            case 1:
                return THEColor = colors.orange
            case 2:
                return THEColor = colors.yellow
            case 3:
                return THEColor = colors.green
            case 4:
                return THEColor = colors.tealBlue
            case 5:
                return THEColor = colors.blue
            case 6:
                return THEColor = colors.purple
            case 7:
                return THEColor = colors.pink
            default :
                return THEColor = colors.red
        }

        return(
            <Ionicons {...rest} name={icon} size={size} color={THEColor}  />
        )
    }
}

export default ClassIcon

// Types will be monitored by PropTypes in the future
//
// 0 => md-create (pencil)
// 1 => md-calculator 
// 2 => md-flask
// 3 => md-color-palette
// 4 => md-globe
// 5 => ios-leaf
// 6 => ios-thermometer
// 7 => ()
// 8 => ()
// 9 => ()