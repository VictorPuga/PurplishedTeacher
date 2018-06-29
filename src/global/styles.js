import { StyleSheet } from 'react-native';

// Colors from Apple's iOS Human Interface Guidelines
const colors = {
    red: '#FF3B30',         // 0
    orange: '#FF9500',      // 1
    yellow: '#FFCC00',      // 2
    green: '#4CD964',       // 3
    tealBlue: '#5AC8FA',    // 4
    blue: '#007AFF',        // 5
    purple: '#5856D6',      // 6
    pink: '#FF2D55',        // 7
    purplished: '#722ED1', 
    selectedMenuItemColor: '#345EF2',
}

// Global styles
const globalStyles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#fff',
    },
    fullFlex: {
        flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color: colors.purplished
    },
    subtitle: {
        fontSize: 30,
        color: colors.purplished,
        fontWeight: '800',
    },
    text: {
        fontSize: 40,
    },
    input: {
        height: 30, 
        width: 200, 
        padding: 5,
        margin: 5,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderRadius: 5,
    }
  });

  export { globalStyles }
  export { colors }