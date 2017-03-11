
'use strict';

import React, { Component, PropTypes } from 'react';
import ReactNative, { Text, View, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback, Image } from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../common/theme';



export default class MainImageButton extends Component {

    static propTypes = {
        text: PropTypes.string,
        icon: PropTypes.string,
        onPress: PropTypes.func,
        imgSize: PropTypes.number,
        fontSize: PropTypes.number,
        color: PropTypes.string,
        btnStyle: View.propTypes.style
    };

    render() {

        return (
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={theme.btnActiveOpacity}>
                {this._renderContentWithIcon()}
            </TouchableOpacity>
        )
    }

    _renderContentWithIcon(){
        const {text, icon, color, imgSize, fontSize, btnStyle} = this.props;
        return(
            <View style={[styles.view, btnStyle]}>
                <Icon name={icon} size={imgSize} color={color}/>
                {text ?
                    <Text style={{fontSize: fontSize, color: color}}>{text}</Text>
                    :
                    null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'rgba(255,255,255,0.7)',
        marginTop: px2dp(4)
    }
});