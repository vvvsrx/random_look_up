'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Platform, TouchableOpacity } from 'react-native';
import px2dp from '../util/px2dp';




export default class MobileContent extends Component {

    static propTypes = {
        style_citynm: PropTypes.string,
        att: PropTypes.string,
        area: PropTypes.string,
        postno: PropTypes.string,
        operators: PropTypes.string,
        ctype: PropTypes.string
    };

    render() {
        const {style_citynm, att, area, postno, operators, ctype} = this.props;
        return (
            <View style={styles.mobileBox}>
                {
                    style_citynm ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>省份:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{style_citynm}</Text>
                            </View>
                        </View>
                        : null
                }

                {
                    att ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>城市:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{att}</Text>
                            </View>
                        </View>
                        : null
                }

                {
                    area ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>区号:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{area}</Text>
                            </View>
                        </View>
                        : null
                }

                {
                    postno ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>邮编:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{postno}</Text>
                            </View>
                        </View>
                        : null
                }

                {
                    operators ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>运营商:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{operators}</Text>
                            </View>
                        </View>
                        : null
                }

                {
                    ctype ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>卡类型:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{ctype}</Text>
                            </View>
                        </View>
                        : null
                }
            </View>

        );
    }
}



const styles = StyleSheet.create({
    mobileBox: 
    {
        paddingTop: px2dp(13),
        paddingLeft: px2dp(13),
        paddingRight: px2dp(13),
    },
    mobileRow: {
        flexDirection: 'row',
    },
    title1: {
        width:px2dp(60),
        marginRight: px2dp(5),
    },
    titleText1: 
    {
        textAlign:'right'
    },
    title2: {
        flex: 1,
    },
    titleText2: {},
});