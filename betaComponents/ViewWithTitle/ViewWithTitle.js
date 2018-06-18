// @flow
'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    FlatList,
    Animated,
    ScrollView
} from 'react-native';
import {
    statusBarHeight,
    headerHeight,
    SafeAreaWithHeader,
} from './DimensionsHelper';

const vw: number = SafeAreaWithHeader.vw;
const vh: number = SafeAreaWithHeader.vh;

class ViewWithTitle extends Component {

    props: {
        title: string,
        children: any,
        data: Array<Object>,
        renderItem: () => mixed,
        color: string
    };

    state: {
        scrollY: Animated.Value,
    } = {
        scrollY: new Animated.Value(0)
    };

    headerHeight: number = statusBarHeight + headerHeight;
    color: string = this.props.color;

    renderTitle = () => {
        if (this.props.title) {
            if (1===1) {
                let title = this.props.title;
                if (title.length > 34) {
                    title = title.substr(0, 32) + "...";
                }
                let titleOpacity = this.state.scrollY.interpolate({
                    inputRange: [0, 41, 48],
                    outputRange: [0, 0, 1],
                    extrapolate: 'clamp'
                });
                let borderBottomColor = this.state.scrollY.interpolate({
                    inputRange: [56, 57],
                    outputRange: ["#6328B6", '#6328B6'],
                    extrapolate: 'clamp'
                });
                return (
                    <Animated.View style={[styles.iOSTitleContainer, {
                        height: this.headerHeight,
                        opacity: titleOpacity,
                        borderBottomColor: borderBottomColor
                    }]}>
                        <Text style={styles.iOSTitle}>
                            {title}
                        </Text>
                    </Animated.View>
                )
            } else {
                let title = this.props.title;
                if (title.length > 38) {
                    title = title.substr(0, 36) + "...";
                }
                return (
                    <View style={[styles.androidTitleContainer, {height: this.headerHeight}]}>
                        <Text style={styles.androidTitle}>
                            {title}
                        </Text>
                    </View>
                )

            }
        }
    };

    renderIOSBigTitle = () => {
        if (1 === 1 && this.props.title) {
            let title = this.props.title;
            if (title.length > 19) {
                title = title.substr(0, 17) + "...";
            }
            const fontSize = this.state.scrollY.interpolate({
                inputRange: [-50, 0],
                outputRange: [40, 34],
                extrapolate: 'clamp'
            });
            const top = this.state.scrollY.interpolate({
                inputRange: [0, 70],
                outputRange: [0, -70]
            });
            return (
                <Animated.View style={ [styles.iOSBigTitleContainer, {transform: [{translateY: top}]}]}
                               key="iosBigTitle">
                    <Animated.Text
                        allowFontScaling={false}
                        style={[styles.iOSBigTitle, {fontSize: fontSize}]}>
                        {title}
                    </Animated.Text>
                </Animated.View>
            )
        }
    };


    renderContentArea = () => {
        if (this.props.children) {
            let padding = (1 === 1 && this.props.title) ? 56 : 0;
            return (
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    scrollEventThrottle={16}
                    style={{paddingTop: padding, height: '100%'}}
                    onScroll={
                        Animated.event(
                            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                        )}
                >
                    <View style={[styles.contentContainer, {paddingBottom: 0}]}>
                        {
                            this.props.children
                        }
                    </View>
                </ScrollView>
            )
        }
    };

    renderContentAreaList = () => {
        if (this.props.data && this.props.renderItem) {
            let headerHeight = (1 === 1 && this.props.title) ? 56 : 0;
            return (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    renderItem={ this.props.renderItem }
                    ListHeaderComponent={ <View style={{width: 100 * vw, height: headerHeight}}/> }
                    data={this.props.data}
                    onScroll={
                        Animated.event(
                            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                        )}
                />
            )
        }
    };

    renderTitleArea = () => {
        return (
            <View style={[styles.titleContainer, {height: this.headerHeight}]}>
                {
                    this.renderTitle()
                }
            </View>
        )
    };

    render() {
        return (
            <View style={styles.outerContainer}>
                {
                    this.renderIOSBigTitle()
                }
                {
                    this.renderTitleArea()
                }
                <View style={[styles.innerContainer, {height: 100 * vh}]}>
                    {
                        this.renderContentArea()
                    }
                    {
                        this.renderContentAreaList()
                    }
                </View>
            </View>
        )
    }
}

const styles: StyleSheet = StyleSheet.create({
    //this is the one
    outerContainer: {
        width: '100%',
        backgroundColor: '#722ed1',
        zIndex: 0,
        height: 50*vh,
    },
    titleContainer: {
        width: '100%',
        backgroundColor: '#722ed1',
    },
    iOSTitleContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#6328B6',
    },
    iOSTitleContainerInvisible: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    iOSTitle: {
        marginBottom: 13,
        fontSize: 17,
        lineHeight: 17,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    androidTitleContainer: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#6328B6',
    },
    androidTitleContainerInvisible: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    androidComponentContainer: {
        position: 'absolute',
        right: 16,
        bottom: 0,
        width: 100 * vw - 32,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    androidTitle: {
        marginBottom: 16,
        marginLeft: 72,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    iOSBigTitleContainer: {
        position: 'absolute',
        top: headerHeight + statusBarHeight,
        left: 0,
        width: '100%',
        height: 56,
        backgroundColor: '#722ed1',
        borderBottomWidth: 1,
        borderBottomColor: '#6328B6'
    },
    iOSBigTitle: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 16,
        fontSize: 34,
        lineHeight: 40,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    innerContainer: {
        position: 'relative',
        width: '100%',
    },
    contentContainer: {
        width: '100%',
        backgroundColor: '#fff',
    }
});

module.exports = ViewWithTitle;