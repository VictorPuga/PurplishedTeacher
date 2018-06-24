import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { Camera, Permissions, Constants, FileSystem } from 'expo';
import { Ionicons } from '@expo/vector-icons'
import DoubleClick from 'react-native-double-click'
import globalStyles from 'src/global/styles'
import AnswerModal from './AnswerModal';
import axios from 'axios'
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

            console.log('1')

            try {
                console.log('2')
                this.setState({loading: true})
                const photo = await this.camera.takePictureAsync({base64: true})
                await this.setState({base64: `${photo.base64}`})
                await console.log('3')
                
            }
            catch (e) {
                console.log('Something went wrong: ', e)
            }

            console.log('3.5')

            try {
                console.log('4')
                const encodedImage = await this.state.base64

                await axios.post(`https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
                    "requests":[
                      {
                        "image":{
                            "content": encodedImage
                        },
                        "features":[
                          {
                            "type":"TEXT_DETECTION",
                            "maxResults":1
                          }
                        ]
                      }
                    ]
                  },
                )
                    .then( response => this.setState({text: response.data}))
                    .catch(e => console.log('Something went wrong with Google Cloud Vision', e));
               
                    console.log('5')
            }
            catch (e) {
                console.log('error', e)
            }
            finally {
                let data = this.state.text
                data = data.responses[0].textAnnotations[0].description;
                this.setState({text: data})
                // console.log(this.state.text)
                console.log('6')



                this.setState({loading: false})
                this.setState({modalVisible: true})
            }
        }
    }

    render() {
        const { hasCameraPermission } = this.state;
        const text = this.state.showInstructions ? <Text style={globalStyles.subtitle}>Double tap to check the test</Text> : null

        const activityIndicator = this.state.loading 
            ? <ActivityIndicator size="large" style={styles.activityIndicator} color="white"  /> 
            : null

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <NoAccessView />;
        } else {
            return (
                <Camera 
                    style={globalStyles.fullFlex} 
                    ref={ref => { this.camera = ref; }}
                    barCodeTypes={[Camera.Constants.BarCodeType.qr]}
                    onBarCodeRead={(code)=>this.setState({qr: code.data })}
                    flashMode={this.state.flashMode}
                    type={this.state.type}>
                    <DoubleClick onClick={()=>this.setState({modalVisible: true})}/*onClick={this.takePictureHandler}*/ style={globalStyles.fullFlex} >
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
                        text={this.state.text}
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

class NoAccessView extends React.Component {
    render() {
        return(
            <View style={globalStyles.container} >
                <Text style={globalStyles.subtitle} >
                    It looks we have no access to the camera
                </Text>
                <Text style={globalStyles.subtitle} >
                    If you want to use this tool, go to your device's settings
                </Text>
            </View>
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
  