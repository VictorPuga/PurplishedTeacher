import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { Camera, Permissions, Constants, FileSystem } from 'expo';
import { Ionicons } from '@expo/vector-icons'
import DoubleClick from 'react-native-double-click'
import globalStyles from 'src/global/styles'
import AnswerModal from './AnswerModal';
import {key} from '../../../../key'


export default class CheckScreen extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        flashMode: Camera.Constants.FlashMode.off,
        showInstructions: true,
        modalVisible: false,
        loading: false,
        qr: null,
        base64: null,
        text: null
    };

    async componentWillMount() {
        setTimeout(()=>this.setState({showInstructions: false}), 3000)

        this._flashListener = this.props.navigation.addListener('didBlur', () => {
            this.setState({flashMode: Camera.Constants.FlashMode.off,})
        })

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

    closeModal = () => {
        this.setState({modalVisible: false})
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

    takePictureHandler = async () => {
        if (this.camera) {

            try {
                this.setState({loading: true})
                var photo = await this.camera.takePictureAsync({base64: true})
            }
            catch (e) {
                console.warn('Something went wrong')
            }
            finally {
                this.setState({base64: photo.base64})
                this.setState({loading: false})
                this.setState({modalVisible: true})
                console.warn('finished!')
            
            }

            try {
                const stringifiedImage = this.state.base64
                console.warn(stringifiedImage)
                fetch(`https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                            "requests": [
                                {
                            "image": {
                                "content": stringifiedImage
                            },
                            "features": [
                            {
                                "type": "TEXT_DETECTION"
                            }
                            ]
                        }
                        ]
                    })
                }).then(data => this.cleanData(data))
            }
            catch (e) {
                console.warn('Something went wrong with Google Cloud Vision')
            }
            finally {

                console.warn(this.state.text)

            }
        }
    }
    
    cleanData = (data) =>  JSON.parse(data).responses[0].textAnnotations[0].description;


    render() {
        const { hasCameraPermission } = this.state;
        const text = this.state.showInstructions ? <Text style={globalStyles.subtitle}>Double tap to check the test</Text> : null

        const activityIndicator = this.state.loading 
            ? <ActivityIndicator size="large" style={styles.activityIndicator} color="white"  /> 
            : null

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <Camera 
                    style={globalStyles.fullFlex} 
                    ref={ref => { this.camera = ref; }}
                    barCodeTypes={[Camera.Constants.BarCodeType.qr]}
                    onBarCodeRead={(code)=>this.setState({qr: code.data })}
                    flashMode={this.state.flashMode}
                    type={this.state.type}>
                    <DoubleClick onClick={this.takePictureHandler} style={globalStyles.fullFlex} >
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
                    {activityIndicator}
                    <AnswerModal 
                        isVisible={this.state.modalVisible} 
                        close={this.closeModal} 
                        qr={this.state.qr}
                         /> 
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
    activityIndicator: {
        position: 'absolute',
        top: '48%',
        left: '48%',
    }
  });
  