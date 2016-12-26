'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import TextButton from '../component/textButton';
import px2dp from '../util/px2dp';
import MobilePage from './mobilePage';



export default class MainScene extends Component {
    constructor(props){
        super(props);
        //MainScene.switchToMobilePage = MainScene.switchToMobilePage.bind(this);
    }


    _switchToMobilePage(userInfo) {
        this.props.navigator.push({
            component: MobilePage
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.height160, styles.row]}>
                    <TextButton text='历史上的今天'></TextButton>
                </View>
                <View style={[styles.height160, styles.row]}>
                    <View style={[styles.height160, styles.part_1_left]}>
                        <TextButton onPress={this._switchToMobilePage.bind(this)} text='手机号归属地'></TextButton>
                    </View>
                    <View style={[styles.height160, styles.part_1_left]}>
                        <TextButton text='身份证查询'></TextButton>
                    </View>
                </View>
                <View style={[styles.height160, styles.row]}>
                    <View style={[styles.height160, styles.part_1_left]}>
                        <TextButton text='IP地址'></TextButton>
                    </View>
                    <View style={[styles.height160, styles.part_1_left]}>
                        <TextButton text='汇率查询'></TextButton>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    row: {
        flexDirection: 'row',
        paddingTop: 20
    },
    font30: {
        fontSize: 30
    },
    height160: {
        height: 160
    },
    part_1_left: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    }
});