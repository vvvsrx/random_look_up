'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import px2dp from '../util/px2dp';

export default class TextButton extends Component{
    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func,
        color: PropTypes.string,
        fontSize: PropTypes.number
    };

    static defaultProps = {
        color: 'steelblue',
        fontSize: px2dp(12)
    };

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}>
                <Text style={{fontSize:this.props.fontSize, color: this.props.color}}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }

}