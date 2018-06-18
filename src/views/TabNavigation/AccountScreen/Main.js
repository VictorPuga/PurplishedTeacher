import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, SectionList} from 'react-native';
import {SettingsCell, SectionHeader} from 'src/global/UI'
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
            <Ionicons name="ios-person" size={200} color="#C1C1C1" />
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

    goToSetting = (setting) => {
        // Make a request to Dynamo
        this.props.navigation.navigate('Detail', { setting: setting })
    }

    render() {
        return(
            <View style={globalStyles.container}>
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
                        {title: 'Config group 3', data: ['Some config 5', 'Some config 6']},
                    ]}
                    renderItem={
                        ({item, index, section}) => 
                            <SettingsCell  
                                key={index} 
                                main={item} 
                                pressed={()=> this.goToSetting(item)} />
                    }
                    renderSectionHeader={
                        ({section: {title}}) => (
                        <SectionHeader text={title}/>
                    )}
                    />
            </View>
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