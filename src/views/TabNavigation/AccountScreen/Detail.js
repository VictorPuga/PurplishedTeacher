import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, SectionList} from 'react-native';
import {DetailCell, SectionHeader} from 'src/global/UI'
import Ionicons from 'react-native-vector-icons/Ionicons';


import globalStyles from 'src/global/styles'

const stringToKebab = (string) => string.split(" ").join("-").toLowerCase();

class Detail extends React.Component {
    state = {
        data: {
            'some-other-config-1': 'hey1',
            'some-other-config-2': 'hey2',
            'some-other-config-3': 'hey3',
        },
        refreshing: false,
        loading: false,
    }

    static navigationOptions ={
          title: 'Account',
      };

    renderSeparator = () => <View style={styles.separator} />

    renderEmptyComponent = () => <View />
      
    renderDetailItem = (setting) => {
       // const text = string(this.state[stringToKebab(setting)])
       const text = 'hey'
        console.log(text)
        return text
    }

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
        const something = 'some other config 3'
        return(
            <View style={globalStyles.container}>
                <SectionList
                    style={styles.list}
                    ItemSeparatorComponent={this.renderSeparator}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    keyExtractor={(item, index) => item + index}
                    sections={[
                        {   title: 'Sub Config group 1', 
                            data: [ 'Some other config 1', 
                                    'Some other config 2',
                                    'Some other config 3',
                            ]
                        },
                        {   title: 'Sub Config group 2', 
                            data: [ 'Some other config 4', 
                                    'Some other config 5',
                            ]
                        },
                    ]}
                    renderItem={
                        ({item, index, section}) => 
                            <DetailCell  
                                key={index} 
                                main={item}
                                detail={item[index]} />
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

export default Detail;

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