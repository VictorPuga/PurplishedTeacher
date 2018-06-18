import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, SectionList, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CardCell} from 'src/global/UI'


import globalStyles from 'src/global/styles'

class Main extends React.Component {
    state = {
        data: [

        ],
        refreshing: false,
        loading: false,
    }
    static navigationOptions = 'Account'
       
    renderHeader = () => (
        <View style={styles.square} aspectRatio={2} />
    )
    renderSeparator = () => <View style={styles.separator} />

    renderEmptyComponent= () => <View />

    // infoDetailCell = () => (
    //     <SafeAreaView style={cellStyles.cell}>
    //             <View style={cellStyles.textContainer}>
    //                 <Text style={cellStyles.mainText} numberOfLines={1} >{this.props.main}</Text>
    //                 <View style={cellStyles.detailTextContainer}>
    //                     <Text style={cellStyles.detailText} numberOfLines={1} >{this.props.detail}</Text>
    //                 </View>
    //             </View>
    //             <TouchableOpacity
    //                 onPress={this.props.pressed}>
    //                 <View style={cellStyles.detailButton}>
    //                     <Ionicons name="ios-information-circle-outline" size={25} color="#1D9BF6" />
    //                 </View>
    //             </TouchableOpacity>
    //         </SafeAreaView>
    // )
      
    fetchData = () => {
        this.setState({loading: true})

        // Make a request to Dynamo

        this.setState({refreshing: false, loading: false})
    }

    handleRefresh = () => {
        this.setState({refreshing: true}, () => {
            this.fetchData()
        })
    }
    goToSetting = (config) => {
        // Make a request to Dynamo
        this.props.navigation.navigate('Detail', { config: config })
    }
    render() {
        return(
            <View style={globalStyles.container}>
                <SectionList
                    style={styles.list}
                    ItemSeparatorComponent={this.renderSeparator}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    keyExtractor={(item, index) => item + index}
                    sections={[
                        {title: 'Title1', data: ['item1', 'item2']},
                        {title: 'Title2', data: ['item3', 'item4']},
                        {title: 'Title3', data: ['item5', 'item6']},
                    ]}
                    renderItem={
                        ({item, index, section}) => 
                            <Text key={index}>{item}</Text>
                    }
                    renderSectionHeader={
                        ({section: {title}}) => (
                        <Text style={{fontWeight: 'bold'}}>{title}</Text>
                    )}
                    
                    
                    />
                    <Cell main="hey" detail="hello" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    square: {
        width: '100%',
        backgroundColor: 'blue',
    },
    list: {
        width: '100%',
        backgroundColor: 'red'
     },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        margin: 5,
    },
    content: {
        fontSize: 20,
        margin: 5,
    },
    whiteBack: {
        backgroundColor: 'white'
    },
    separator: {
        height: 0.5,
        width: "100%",
        backgroundColor: "#F0F0F1",
    }
})

export default Main;

class Cell extends React.Component {
    render() {
        return(
            <SafeAreaView style={cellStyles.cell}>
                <View style={cellStyles.textContainer}>
                    <Text style={cellStyles.mainText} numberOfLines={1} >{this.props.main}</Text>
                    <View style={cellStyles.detailTextContainer}>
                        <Text style={cellStyles.detailText} numberOfLines={1} >{this.props.detail}</Text>
                    </View>
                </View>
                <View style={cellStyles.detailButton}><Ionicons name="ios-arrow-forward" size={20} color="gray" /></View>
            </SafeAreaView>
        )
    }
}

class Header extends React.Component {
    render() {
        return(
            <View>
                
            </View>
        )
        
    }
}

const cellStyles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }, 
    detailTextContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
    }, 
    mainText: {
        fontSize: 20,
    },  
    detailText: {
        fontSize: 18,
        color: '#9A9A9A',
        alignSelf: 'flex-end',
    },  
    detailButton: {
        marginRight:10,
        alignItems: 'center',
    }
})