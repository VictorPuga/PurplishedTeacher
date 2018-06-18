import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, SectionList, NavigatorIOS} from 'react-native';
import {DetailCell, SectionHeader} from 'src/global/UI'

import Ionicons from 'react-native-vector-icons/Ionicons';


import globalStyles from 'src/global/styles'

class Main extends React.Component {
    state = {
        data: [

        ],
        refreshing: false,
        loading: false,
    }

    static navigationOptions ={
          title: 'Account',
    };
       
    renderHeader = () => (
        <View style={styles.header} aspectRatio={2}>
            <Ionicons name="ios-list-box-outline" size={200} color="#C1C1C1" />
        </View>
    )

    renderSeparator = () => <View style={styles.separator} />

    renderEmptyComponent= () => <View />
      
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

    render() {
        return(
            <SafeAreaView style={globalStyles.container}>
                <SectionList
                    style={styles.list}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    keyExtractor={(item, index) => item + index}
                    sections={[
                        {title: 'Config group 1', data: ['Some config 1', 'Some config 2']},
                        {title: 'Config group 2', data: ['Some config 3', 'Some config 4']},
                    ]}
                    renderItem={
                        ({item, index, section}) => 
                            <DetailCell  
                                key={index} 
                                main={item}  />
                    }
                    renderSectionHeader={
                        ({section: {title}}) => (
                        <SectionHeader text={title}/>
                    )}
                    />
            </SafeAreaView>
        )
    }
}

export default Main;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        backgroundColor: '#EFEFF4'
     },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    separator: {
        height: 0.5,
        width: "100%",
        backgroundColor: "#F0F0F1",
    }
})