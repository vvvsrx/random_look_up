'use strict';

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Platform,TouchableOpacity} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../common/theme';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SimpleNavigationBar extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        backOnPress: PropTypes.func.isRequired
    };

    render(){
        return(
            <View style={styles.toolbar}>
                <TouchableOpacity onPress={this.props.backOnPress} activeOpacity={theme.btnActiveOpacity}>
                    {this._renderContentWithIcon()}
                </TouchableOpacity>

                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }

    _renderContentWithIcon(){
        return(
            <View style={[styles.view, styles.imgBtn]}>
                <Icon name="ios-arrow-back" size={px2dp(25)} color="#fff"/>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    toolbar: {
        height: theme.actionBar.height,
        width: theme.screenWidth,
        backgroundColor: theme.actionBar.backgroundColor,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
    },
    imgBtn: {
        width: px2dp(49),
        height: px2dp(49)
    },
    title:{
        color: theme.actionBar.fontColor,
        fontSize: theme.actionBar.fontSize,
        marginLeft: px2dp(5),
    },
    view:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'rgba(255,255,255,0.7)',
        marginTop: px2dp(4)
    }
});