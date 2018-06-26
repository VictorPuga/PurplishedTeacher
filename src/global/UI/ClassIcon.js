import React from 'react'
import { Ionicons } from '@expo/vector-icons'

class ClassIcon extends React.Component {
    render() {
        const { is, size, ...rest } = this.props

        let icon

        switch (is) {
            case 0:
                icon = 'md-create'
                break;
            case 1:
                icon = 'md-calculator'
                break;
            case 2:
                icon = 'ios-flask'
                break;
            case 3:
                icon = 'ios-color-palette'
                break;
            case 4:
                icon = 'md-globe'
                break;
            case 5:
                icon = 'ios-leaf'
                break;
            case 6:
                icon = 'ios-thermometer'
                break;
            case 7:
                icon = 'ios-bulb'
                break;
            case 8:
                icon = 'ios-quote'
                break;
            case 9:
                icon = 'md-create'
                break;
            default:
                icon = 'md-create'
                break;
            }
            
        return(
            <Ionicons {...rest} name={icon} size={size} color={'white'}  />
        )
    }
}

export default ClassIcon

// Types will be monitored by PropTypes in the future...
//
// 0 => md-create (pencil)
// 1 => md-calculator 
// 2 => md-flask
// 3 => md-color-palette
// 4 => md-globe
// 5 => ios-leaf
// 6 => ios-thermometer
// 7 => ios-bulb
// 8 => ios-quote
// 9 => ()