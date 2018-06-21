import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Alert, StatusBar } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons'
import DoubleClick from 'react-native-double-click'
import globalStyles from 'src/global/styles'

export default class CheckScreen extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        flashMode: Camera.Constants.FlashMode.auto,
        showInstructions: true
    };

    async componentWillMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setHidden(true);
          });
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    componentWillUnmount() {
        this._navListener.remove();
      }
    

    toggleCameraMode = () => {
        this.setState({
            type: this.state.type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back,
          });
    }

    takePicture = () => {
        Alert.alert('picture taken')
    }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <Camera 
                    style={globalStyles.fullFlex} 
                    flashMode={this.state.flashMode}
                    type={this.state.type}>
                    <DoubleClick onClick={this.takePicture} style={globalStyles.fullFlex} >
                        <View  style={globalStyles.fullFlex} >
                            <TopArea 
                                toggleFlashMode={()=>console.log('hey')}
                                flashMode={this.state.flashMode} />
                            <View style={globalStyles.fullFlex} ></View>
                            <BottomArea toggleCameraMode={this.toggleCameraMode} />
                        </View>
                    </DoubleClick> 
                </Camera>
      );
    }
  }
}

class TopArea extends React.Component {
    state = {
        showControls: false,
        flashMode: this.props.flashMode
    }

    toggleControls = () => {
        showingControls = this.state.showControls
        this.setState({
            showControls: !showingControls
        });
    }

    render() {
        const controls = this.state.showControls ? 
            <View style={styles.controlGroup} >
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.controls} >Auto</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.controls} >On</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.controls} >Off</Text>
                </TouchableOpacity>
            </View>
            : null 

        return(
            <SafeAreaView style={{backgroundColor: 'black'}} >
                <View style={styles.topArea} >
                <TouchableOpacity 
                        style={{justifyContent: 'center'}} 
                        onPress={this.toggleControls}
                        activeOpacity={0.5}>
                        <Ionicons name="ios-flash" size={30} color="#FEC309" style={styles.flash} />
                    </TouchableOpacity>
                    {controls}
                </View>
            </SafeAreaView>
        )
    }
}

class BottomArea extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.bottomArea}>
                    <TouchableOpacity activeOpacity={0.7} onPress={this.props.toggleCameraMode} >
                        <Ionicons name="ios-reverse-camera-outline" size={50} color="#FEC309" style={styles.reverse} />
                    </TouchableOpacity>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    topArea: {
        backgroundColor: 'black',
        height: 40,
        flexDirection: 'row'
    },
    bottomArea: {
        alignItems: 'flex-end',
        padding: 10,
    },
    flash: {
        marginLeft: 10
    }, 
    reverse: {
        marginRight: 10,
    },
    controls: {
        color: '#F8F8F8',
        fontSize: 17,
    },
    selectedControl: {
        color: '#FEC309',
        fontSize: 17,
    },
    controlGroup: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    }
  });
  