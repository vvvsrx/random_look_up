'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Platform, TouchableOpacity } from 'react-native';
import px2dp from '../util/px2dp';




export default class MobileContent extends Component {

    static propTypes = {
        province: PropTypes.string,
        city: PropTypes.string,
        areacode: PropTypes.string,
        zip: PropTypes.string,
        company: PropTypes.string,
        card: PropTypes.string
    };

    render() {
        const {province, city, areacode, zip, company, card} = this.props;
        return (
            <View style={styles.mobileBox}>
                {
                    province ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>省份:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{province}</Text>
                            </View>
                        </View>
                        : null
                }

                {
                    city ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>城市:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{city}</Text>
                            </View>
                        </View>
                        : null
                }

                {
                    areacode ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>区号:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{areacode}</Text>
                            </View>
                        </View>
                        : null
                }

                {
                    zip ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>邮编:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{zip}</Text>
                            </View>
                        </View>
                        : null
                }

                {
                    company ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>运营商:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{company}</Text>
                            </View>
                        </View>
                        : null
                }

                {
                    card ? 
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>卡类型:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{card}</Text>
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