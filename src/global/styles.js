import { StyleSheet } from 'react-native';

// Colors
const myPurple =  '#722ED1'

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
        color: myPurple
    },
    text: {
        fontSize: 40,
    },
    input: {
        height: 40, 
        width: 200, 
        padding: 5,
        margin: 5,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderRadius: 5,
    }
  });

  export default globalStyles

  
  