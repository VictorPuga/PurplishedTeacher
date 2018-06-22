import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Alert  } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons'
import DoubleClick from 'react-native-double-click'
import globalStyles from 'src/global/styles'

export default class CheckScreen extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        flashMode: Camera.Constants.FlashMode.off,
        showInstructions: true
    };

    async componentWillMount() {
        setTimeout(()=>this.setState({showInstructions: false}), 3000)
        this._flashListener = this.props.navigation.addListener('didBlur', () => {
            this.setState({flashMode: Camera.Constants.FlashMode.off,})

          });

        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }



    componentWillUnmount() {
        this._flashListener.remove();
        
        
      }

    toggleCameraMode = () => {
        this.setState({flashMode: Camera.Constants.FlashMode.off,})
        this.setState({
            type: this.state.type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back,
          });
    }

    toggleFlashMode = () => {
        if (this.state.type === Camera.Constants.Type.back) {
            this.setState({
                flashMode: this.state.flashMode === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.torch
                  : Camera.Constants.FlashMode.off
            });
        }
    }

    takePicture = () => {
        Alert.alert('picture taken')
    }

    render() {
        const { hasCameraPermission } = this.state;
        const text = this.state.showInstructions ? <Text style={globalStyles.subtitle}>Double tap to check the test</Text> : null

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
                                toggleFlashMode={this.toggleFlashMode}
                                flashMode={this.state.flashMode}
                                toggleCameraMode={this.toggleCameraMode} />
                            <View style={globalStyles.fullFlex} >
                                {text}
                            </View>
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
        const flashIcon = this.props.flashMode === Camera.Constants.FlashMode.off ? "ios-flash-outline" : "ios-flash"
        return(
            <SafeAreaView >
                <View style={styles.topArea} >
                <TouchableOpacity 
                        style={{justifyContent: 'center'}} 
                        onPress={this.props.toggleFlashMode}
                        activeOpacity={0.5}>
                        <Ionicons name={flashIcon} size={40} color="#FEC309" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={this.props.toggleCameraMode} >
                        <Ionicons name="ios-reverse-camera-outline" size={50} color="#FEC309" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    topArea: {
        height: 50,
        width: '30%',
        flexDirection: 'row'
    },
    icon: {
        marginHorizontal: 20,
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
  